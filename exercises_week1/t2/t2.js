"use strict";

var input = require("readline-sync");

let phoneBook = [];
let execute = true;

while (execute) {
  const options = ["Lisää uusi tietue", "Etsi tietue"];
  const indexOfSelection = input.keyInSelect(options, "Mitä haluat tehdä?");

  switch (indexOfSelection) {
    // Lopeta ohjelman suoritus
    case -1:
      execute = false;
      break;
    // Uuden henkilön lisäys
    case 0:
      var name = input.question("Syötä nimi: ");
      var phoneNumber = input.questionInt("Syötä puhelinnumero: ");

      const newContact = { nimi: name, nro: phoneNumber };

      phoneBook.push(newContact);
      console.log(
        `\n\n Uusi tietue lisätty: \n Nimi: ${newContact.nimi} \n Puhelinnumero: ${newContact.nro} \n\n`
      );
      break;
    // Tietojen etsiminen
    case 1:
      var searchText = input.question("Anna henkilön nimi tai sen osa: ");
      const foundNumber = findNumberByName(phoneBook, searchText);
      console.log(
        `\n\nSeuraava numero löytyi hakuehdolla (${searchText}):\n${
          foundNumber
            ? `${foundNumber}\n\n`
            : "Hakuehdolla ei löytynyt näytettävää"
        }\n\n`
      );
      break;
    default:
      console.log(index);
      break;
  }
}

function findNumberByName(arr, searchTerm) {
  const filteredItems = arr
    .filter((a) => a.nimi.includes(searchTerm))
    .map((a) => a.nro)[0];

  return filteredItems;
}
