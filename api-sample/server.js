// Module dependencies

var express = require("express");
var mysql = require("mysql2/promise");

async function bootstrap() {
  // Application initialization
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD
  });

  var app = (module.exports = express.createServer());

  // Configuration
  const [rows, fields] = await connection.execute("SELECT * FROM user");
  console.log(rows);

  app.use(express.bodyParser());

  // Update MySQL database

  app.get("/users", async function(req, res) {
    console.log("Get Users");
    const [rows, fields] = await connection.execute("SELECT * FROM user");
    res.send(rows);
  });

  app.post("/users", async function(req, res) {
    try {
      console.log(req.body);

      // Faut réussir à insérer le body
      req.body.id = 10;
      req.body.name = "Pierrick";
      req.body.age = 14;

      const [rows, fields] = await connection.query(
        "INSERT INTO user VALUES (?, ?, ?)",
        [req.body.id, req.body.name, req.body.age]
      );
      res.send("User added to database with ID: " + rows);
    } catch (error) {
      console.error(error);
    }
  });

  // Begin listening

  app.listen(3000);
  console.log(
    "Express server listening on port %d in %s mode",
    app.address().port,
    app.settings.env
  );
}

bootstrap();
