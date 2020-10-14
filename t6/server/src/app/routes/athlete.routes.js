module.exports.setup = function (app) {
  const athletes = require("../controllers/athlete.controller.js");

  /**
   * @swagger
   * /api/athlete:
   *   post:
   *     tags:
   *       - Athletes
   *     description: Creates a new athlete
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: athlete
   *         description: Athlete object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Athlete'
   *     responses:
   *       200:
   *         description: Successfully created
   */
  app.post("/api/athlete", athletes.create);

  /**
   * @swagger
   * /api/athletes:
   *   get:
   *     tags:
   *       - Athletes
   *     description: Returns all athletes
   *     responses:
   *       200:
   *         description: all athletes
   *         schema:
   *           $ref: '#/definitions/Athlete'
   */
  app.get("/api/athletes", athletes.findAll);

/**
 * @swagger
 * /api/athlete/{id}:
 *   get:
 *     tags:
 *       - Athletes
 *     description: Returns a single athlete
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Athlete's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single athlete
 *         schema:
 *           $ref: '#/definitions/Athlete' 
 */
  app.get("/api/athlete/:id", athletes.findOne);

/**
 * @swagger
 * /api/athlete/{id}:
 *   put:
 *     tags:
 *       - Athletes
 *     description: Updates a single athlete
 *     produces: application/json
 *     parameters:
 *       name: id
 *       in: body
 *       description: Fields for the Athlete resource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/Athlete'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
  app.put("/api/athlete/:id", athletes.update);

/**
 * @swagger
 * /api/athlete/{id}:
 *   delete:
 *     tags:
 *       - Athletes
 *     description: Deletes a single athlete
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Athlete's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
  app.delete("/api/athlete/:id", athletes.delete);
};
