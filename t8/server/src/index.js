const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
   // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/api/location", (req, res) => {

  const generateGrid = (size) => {
    let base = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
      base.push(row);
    }
    return base;
  };

  const randomShipLocationInGrid = () => {
    const shipChar = 1;
    const size = 5;
    const grid = generateGrid(size);

    // Randomize first column in grid
    const randomRow = Math.floor(Math.random() * 5);
    const randomColumn = Math.floor(Math.random() * 5);
    grid[randomRow][randomColumn] = shipChar;

    const rotation = Math.random() >= 0.5 ? "vertical" : "horizontal";
    if (rotation === "vertical") {
      if (randomRow === 0) {
        grid[randomRow + 1][randomColumn] = shipChar;
        grid[randomRow + 2][randomColumn] = shipChar;
      } else if (randomRow === size - 1) {
        grid[randomRow - 1][randomColumn] = shipChar;
        grid[randomRow - 2][randomColumn] = shipChar;
      } else {
        grid[randomRow - 1][randomColumn] = shipChar;
        grid[randomRow + 1][randomColumn] = shipChar;
      }
    } else {
      if (randomColumn === 0) {
        grid[randomRow][randomColumn + 1] = shipChar;
        grid[randomRow][randomColumn + 2] = shipChar;
      } else if (randomColumn === size - 1) {
        grid[randomRow][randomColumn - 1] = shipChar;
        grid[randomRow][randomColumn - 2] = shipChar;
      } else {
        grid[randomRow][randomColumn - 1] = shipChar;
        grid[randomRow][randomColumn + 1] = shipChar;
      }
    }

    return grid;
  };

  const gridWithShip = randomShipLocationInGrid();
  console.log(gridWithShip)

  res.send(gridWithShip);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
