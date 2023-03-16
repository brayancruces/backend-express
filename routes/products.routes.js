const { authJwt } = require("../middleware");

const products = require("../controllers/products.controller");

module.exports = function(app) {
     app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      app.get("/api/products/", [authJwt.verifyToken], properties.findAll);
      app.post("/api/products/", [authJwt.verifyToken, authJwt.isAdmin], products.create);
      app.get("/api/products/", [authJwt.verifyToken, authJwt.isAdmin], products.findAll);  
      app.get("/api/products/:id", [authJwt.verifyToken], products.findOne);
      app.put("/api/products/:id", [authJwt.verifyToken, authJwt.isAdmin], products.update);
      app.delete("/api/products/:id", [authJwt.verifyToken, authJwt.isAdmin], products.delete);
      app.delete("/api/products/", [authJwt.verifyToken, authJwt.isAdmin], products.deleteAll); 

      // Subida masiva via csv 
      app.post("/api/products/bulk", [authJwt.verifyToken, authJwt.isAdmin], products.uploadByCsv);
};