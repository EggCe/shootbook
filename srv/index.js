import express from "express";
import mysql from "mysql";
import cors from "cors";

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "schiessbuch"
});

// import socketIO from "socket.io";

export default (app, http) => {
  app.use(express.json());
  app.use(cors());


  app.get("/eintraege", (req, res) => {
    connection.query("SELECT * FROM eintraege", function (err, rows, fields) {
      res.json({ ergebnis: rows });
    });
  });

  app.post("/neweintrag", (req, res) => {
    // let params = req.body;
    let name = req.body.shooter.name;
    let surname = req.body.shooter.surname;
    let gk = 0;
    let kk = 0;
    let pauschale = 0;
    if (req.body.shooter.gk === true) { gk = 1; }
    else {
      gk = 0;
    }
    if (req.body.shooter.kk === true) {
      kk = 1;
    }
    else {
      kk = 0;
    }
    if (req.body.shooter.pauschale === true) {
      pauschale = 1;
    }
    else {
      pauschale = 0;
    }


    connection.query("INSERT INTO eintraege (name, last_name, pauschale, gk ,kk, date) VALUES ('" + name + "', '" + surname + "', '" + pauschale + "', '" + gk + "', '" + kk + "', now())", function (err, rows, fields) {

    });

  });


  app.post('/bar', (req, res) => {

  });
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
}
