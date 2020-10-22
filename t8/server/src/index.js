const express = require('express')
const app = express()
const port = 3000

app.get('/api/location', (req, res) => {
    const generateGrid = (size = 5) => {
        let base = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(0);
            }
            base.push(row);
        }
        return base;
    }

    const calculateShipLocation = (grid) => {
        const rowCount = grid.length;
        const columnsInRowCount = grid?.[0].length;

        const randomRow = Math.floor(Math.random() * 5); 
        const randomColumn = Math.floor(Math.random() * 5); 

        grid[randomRow][randomColumn] = "testi"
    }

    const grid = generateGrid();
    
    calculateShipLocation(grid);



    console.table(grid)


    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})