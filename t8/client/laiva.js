var baseUrl = "http://localhost:3000/api";

$(document).ready(function () {
  haeLaivanSijainti();
});

const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open("GET", `${baseUrl}/location`);
  request.setRequestHeader( "Content-Type", "application/json" );
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response); // we got data here, so resolve the Promise
    } else {
      reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };

  request.onerror = () => {
    reject(Error("Error fetching data.")); // error occurred, reject the  Promise
  };

  request.send(); // send the request
});

function haeLaivanSijainti() {
  promise.then(
    (data) => {
      // Tyhjennä tbody alta pois
      $("#laivaTable > tbody").empty();
      var tableContent;

      // loop through returned list of data
      $.each(JSON.parse(data), function (idx, item) {
        var cells = "";
        $.each(item, function (idx, element) {
          cells += `<td style="border:1px gray solid; height:80px; width: 80px; background-color: ${
            element === 1 ? "black" : "white"
          }"></td>`;
        });
        tableContent += `<tr>${cells}</tr>`;
      });

      // Append rows to dom
      $("#laivaTable > tbody:last-child").append(tableContent);
    })
}
