/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Permite obtener un token de inicio de sesion JWT
 * /auth/login:
 *   post:
 *     summary: Logeo de usuario 
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           
 *     responses:
 *       200:
 *         description: Token JWT generado.
 *         content:
 *           application/json:
 *       500:
 *         description: Some server error
 */
const controller = require("../controllers/auth.controller"); 

module.exports = function(app) {
app.use(function(req, res, next) {
res.header(
"Access-Control-Allow-Headers",
"x-access-token, Origin, Content-Type, Accept");
next();
});


app.post("/api/login", controller.signin);
};