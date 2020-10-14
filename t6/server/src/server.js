// <-- Dependencies --> 
const express = require("express");
const bodyParser = require("body-parser");
var swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// <!-- Dependencies -->

const PORT = process.env.PORT || 3001;


// <-- Routes --> 
const athlete = require("./app/routes/athlete.routes");
// <!-- Routes -->

// <-- Middlewares and initializiation --> 
const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// <!-- Middlewares and initializiation -->

// <-- Swagger Config --> 
var swaggerDefinition = {
  info: {
    title: 'Athletes API Documentation',
    version: '1.0.0',
    description: 'API Documentation for Atheletes backend',
  },
  host: `localhost:${PORT}`,
  basePath: '/api',
};
var options = {
  swaggerDefinition,
  apis: ['./src/app/routes/*.routes.js'],
};
const swaggerSpec = swaggerJSDoc(options);
// <!-- Swagger Config -->

// <-- Apis --> 
// Documentation
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
// Other apis
athlete.setup(app);
// <!-- Apis -->

// Start the server
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Example app listening at http://%s:%s', host, port);
});

