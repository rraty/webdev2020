const sql = require("./db.js");

// constructor
const Athlete = function (Athlete) {
  this.firstNames = Athlete.firstNames;
  this.nickName = Athlete.nickName;
  this.lastName = Athlete.lastName;
  this.yearOfBirth = Athlete.yearOfBirth;
  this.weight = Athlete.weight;
  this.linkToImage = Athlete.linkToImage;
  this.species = Athlete.species;
  this.achievements = Athlete.achievements;
};

Athlete.create = (athlete, result) => {
  const _parsed = { ...Athlete, species: JSON.stringify(athlete.species), achievements: JSON.stringify(athlete.achievements) }

  sql.query("INSERT INTO athletes set ?", _parsed, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...athlete });
  });
};

Athlete.findById = (id, result) => {
  sql.query(`SELECT * FROM athletes WHERE id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      //Quick and dirty fix; we need to parse species and achievements manually because mysql package cant handle them
      const _parsed = res.map(i => ({ ...i, species: JSON.parse(i.species), achievements: JSON.parse(i.achievements) }))
      result(null, _parsed[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Athlete.getAll = (result) => {
  sql.query("SELECT * FROM athletes", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    //Quick and dirty fix; we need to parse species and achievements manually because mysql package cant handle them
    const _parsed = res.map(i => ({ ...i, species: JSON.parse(i.species), achievements: JSON.parse(i.achievements) }))

    result(null, _parsed);
  });
};

Athlete.updateById = (id, Athlete, result) => {
  const _parsed = { ...Athlete, species: JSON.stringify(Athlete.species), achievements: JSON.stringify(Athlete.achievements) }

  sql.query(
    "UPDATE athletes SET ? WHERE id = ?",
    [_parsed, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...Athlete });
    }
  );
};


Athlete.remove = (id, result) => {
  sql.query("DELETE FROM athletes WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Athlete;
