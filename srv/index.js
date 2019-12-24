import express from "express";
import mysql from "mysql";

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "schiessbuch"
});

// import socketIO from "socket.io";

export default (app, http) => {
  app.use(express.json());

  app.get("/eintraege", (req, res) => {
    let result = {};
    connection.connect();

    connection.query("SELECT * FROM eintraege", function(err, rows, fields) {
      if (err) throw err;
      console.log("The solution is: ", rows);
      result = rows[0];
      res.json({ ergebnis: rows });
    });

    connection.end();
  });

  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  //
  // optional support for socket.io
  //
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
};
