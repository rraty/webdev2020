module.exports = (app) => {
  const persons = require("../controllers/person.controller.js");

  // Create a new Henkilo
  app.post("/person", persons.create);

  // Retrieve all Henkilot
  app.get("/persons", persons.findAll);

  // Retrieve a single Henkilo with henkiloId
  app.get("/person/:personId", persons.findOne);

  // Update a Henkilo with henkiloId
  app.put("/person/:personId", persons.update);

  // Update a Henkilo with henkiloId
  app.patch("/person/:personId", persons.patch);

  // Delete a Henkilo with henkiloId
  app.delete("/person/:personId", persons.delete);
};
