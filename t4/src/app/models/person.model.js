const sql = require("./db.js");

// constructor
const Person = function (Person) {
  this.nimi = Person.nimi;
  this.puhelin = Person.puhelin;
};

Person.create = (newPerson, result) => {
  sql.query("INSERT INTO henkilot SET ?", newPerson, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newPerson });
  });
};

Person.findById = (PersonId, result) => {
  sql.query(`SELECT * FROM henkilot WHERE id = ${PersonId}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Person.getAll = (result) => {
  sql.query("SELECT * FROM henkilot", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Person.updateById = (id, Person, result) => {
  sql.query(
    "UPDATE henkilot SET nimi = ?, puhelin = ? WHERE id = ?",
    [Person.nimi, Person.puhelin, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...Person });
    }
  );
};

Person.patchById = (id, Person, result) => {
  sql.query(
    "UPDATE henkilot SET ? WHERE id = ?",
    [Person, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...Person });
    }
  );
};


Person.remove = (id, result) => {
  sql.query("DELETE FROM henkilot WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Person;
