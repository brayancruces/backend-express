module.exports = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Backend MyMarketLogic", 
            description: "Esta es una prueba de backend.", 
            version: "1.0.0", // version number
            contact: {
              name: "Brayan Cruces", // your name
              email: "brayan2259@gmail.com", // your email
              url: "brayancru.com", // your website
            },
        },
        servers: [
          {
            url: "http://localhost:80",
          },
        ],
      },
      apis: ["./routes/*.js"]
  };