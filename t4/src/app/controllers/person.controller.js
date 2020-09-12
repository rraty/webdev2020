const Person = require("../models/person.model.js");

// Create and Save a new Person
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Person
  const person = new Person({
    nimi: req.body.nimi,
    puhelin: req.body.puhelin,
  });

  // Save Person in the database
  Person.create(person, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the person.",
      });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
  Person.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving persons.",
      });
    } else {
      res.send(data);
    }
  });
};

// Find a single Person with a personId
exports.findOne = (req, res) => {
  Person.findById(req.params.personId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.personId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.personId,
        });
      }
    } else res.send(data);
  });
};

// Update a Person identified by the personId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Person.updateById(req.params.personId, new Person(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.personId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.personId,
        });
      }
    } else res.send(data);
  });
};

// Update a Person identified by the personId in the request
exports.patch = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Person.patchById(req.params.personId, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.personId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.personId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Person with the specified henkiloId in the request
exports.delete = (req, res) => {
  Person.remove(req.params.personId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.personId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.personId,
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
