const Athlete = require("../models/athlete.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!",
    });
  }

  const athlete = new Athlete({
    firstNames: req.body.firstNames,
    nickName:req.body.nickName,
    lastName: req.body.lastName,
    yearOfBirth: req.body.yearOfBirth,
    weight: req.body.weight,
    linkToImage: req.body.linkToImage,
    species: req.body.species,
    achievements: req.body.achievements,
    nimi: req.body.nimi,
    puhelin: req.body.puhelin,
  });

  Athlete.create(athlete, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the athlete.",
      });
    } else {
      res.json(data);
    }
  });
};

exports.findAll = (req, res) => {
  Athlete.getAll((err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving athletes.",
      });
    } else {
      res.json(data);
    }
  });
};

exports.findOne = (req, res) => {
  Athlete.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Athlete with id ${req.params.id}.`,
        });
      } else {
        res.status(500).json({
          message: "Error retrieving Athlete with id " + req.params.id,
        });
      }
    } else res.json(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!",
    });
  }

  Athlete.updateById(req.params.id, new Athlete(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Athlete with id ${req.params.id}.`,
        });
      } else {
        res.status(500).json({
          message: "Error updating Athlete with id " + req.params.id,
        });
      }
    } else res.json(data);
  });
};

exports.delete = (req, res) => {
  Athlete.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Athlete with id ${req.params.id}.`,
        });
      } else {
        res.status(500).json({
          message: "Could not delete Athlete with id " + req.params.id,
        });
      }
    } else res.json({ message: `Athlete was deleted successfully!` });
  });
};
