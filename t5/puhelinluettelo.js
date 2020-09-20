"use strict";

var baseUrl = "http://localhost:3000";

$(document).ready(function () {
  lataaYhteystiedot();

  $("form").submit(function (event) {
    event.preventDefault();
    lisaaUusiYhteystieto();
  });
});

// Hallitse Alertin käyttöä
function handleAlertTrigger(type, message) {
  // Tyhjennä div -> ei voi olla useampia alertteja samaan aikaan
  $("#alertBody").empty();

  // Alert type, default is primary
  var alertType = type ? type : "primary";

  var alertBody = `
    <div id="triggered-alert" class="alert alert-${alertType} fade show" role="alert">
        ${message}
    </div>
    `;

  $("#alertBody").append(alertBody);

  // Ajastin alertin näyttämiseen, hoitaa alertin piilottamisen automaattisesti
  $("#triggered-alert")
    .fadeTo(2000, 500)
    .slideUp(500, function () {
      $("#triggered-alert").slideUp(500);
    });
}

// Lataa rajapinnasta yhteystiedot taulukkoon
function lataaYhteystiedot() {
  $.getJSON(`${baseUrl}/persons`, function (data) {
    // Tyhjennä tbody alta pois
    $("#yhteystiedotTable > tbody").empty();

    var tableContent;
    console.log(data);

    // loop through returned list of data
    $.each(data, function (idx, item) {
      console.log({ idx, item });

      // build table row
      var nimi = item.nimi ? item.nimi : "-";
      var puhelinnumero = item.puhelin ? item.puhelin : "-";

      tableContent += `
        <tr class="d-flex">
            <td class="col-5">${nimi}</td>
            <td class="col-5">${puhelinnumero}</td>
            <td class="justify-content-center text-center col-2">
                <button disabled type="button" class="btn btn-success m-1"><i class="fas fa-edit"></i>  Muokkaa</button>
                <button type="button" onClick="poistaYhteystieto(${item.id})" 
                class="btn btn-danger m-1"><i class="far fa-trash-alt"></i> Poista</button>
            </td>
        </tr>

      `;
    });
    // Append rows to dom
    $("#yhteystiedotTable > tbody:last-child").append(tableContent);
  });
}

function lisaaUusiYhteystieto() {
  $.ajax({
    type: "POST",
    url: `${baseUrl}/person`,
    data: $("#lisaaYhteystieto").serializeArray(),
    success: function () {
      $("#lisaaYhteystieto")[0].reset();
      $("#lisaaUusiModal").modal("hide");
      lataaYhteystiedot();
      handleAlertTrigger("success", "Yhteystiedon lisääminen onnistui");
    },
  });
}

// Handle item deletion
function poistaYhteystieto(id) {
  $.ajax({
    type: "DELETE",
    url: `${baseUrl}/person/${id}`,
    success: function () {
      lataaYhteystiedot();
      handleAlertTrigger("success", "Yhteystiedon poistaminen onnistui");
    },
  });
}
