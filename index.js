const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.use(express.static("./public"));

//DEF Temp. Code - Wird noch gelöscht
app.get("/", (req, res) => {
  res.render("index", { namen: "Daniel Brenzis", userType: "administrator" });
});

app.get("/bauteile/bearbeiten", (req, res) => {
  res.render("bauteilUpdate", { namen: "Daniel Brenzis", userType: "administrator",
    bauteil: {
      name: "Bauteil1",
      beschreibung:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto at, quas blanditiis, ipsa animi libero laboriosam vitae saepe sit et rerum cupiditate repellat odio quidem magni ratione nihil delectus adipisci quos enim minima obcaecati aliquam? Blanditiis nulla corrupti, placeat iste, voluptatum cum laborum harum aliquam voluptas cupiditate, nihil totam fuga.",
      ortsangabe: "Schrank15, linkes Fach 14a 13b",
      anzahl: 15,
      status: "aktiv",
      artikelnummer: "1234512-12345da2"
    }});
});

app.get("/testlogin", (req, res) => {
  res.render("index_login");
});

app.get("/bauteile", (req, res) => {
  const user = {
    namen: "Daniel Brenzis",
    userType: "administrator",
    bauteilList: [
      {
        id: 1,
        name: "Artikel1",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 1,
        name: "Artikel1",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 1,
        name: "Artikel1",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 1,
        name: "Artikel1",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 1,
        name: "Artikel1",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      },
      {
        id: 2,
        name: "Artikel2",
        beschreibung: "Das ist eine neue Bschreibung mit toller länge",
        artikelnummer: "123-1234143",
        anzahl: 16
      }
    ]
  };
  res.render("bauteilList", user);
});

app.get("/bauteile/:id", (req, res) => {
  res.render("bauteil", {
    namen: "Daniel Brenzis",
    userType: "administrator",
    anzahlausgeliehen: 12,
    bauteil: {
      name: "Bauteil1",
      beschreibung:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto at, quas blanditiis, ipsa animi libero laboriosam vitae saepe sit et rerum cupiditate repellat odio quidem magni ratione nihil delectus adipisci quos enim minima obcaecati aliquam? Blanditiis nulla corrupti, placeat iste, voluptatum cum laborum harum aliquam voluptas cupiditate, nihil totam fuga.",
      ortsangabe: "Schrank15, linkes Fach 14a 13b",
      anzahl: 15,
      status: "aktiv",
      artikelnummer: "1234512-12345da2"
    }
  });
});


app.get("/ausleihauftraege", (req, res) => {
  res.render("ausleihauftraegeList", {
    namen: "Daniel Brenzis",
    userType: "administrator",
    anzahlausgeliehen: 12,
    bauteil: {
      name: "Bauteil1",
      beschreibung:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto at, quas blanditiis, ipsa animi libero laboriosam vitae saepe sit et rerum cupiditate repellat odio quidem magni ratione nihil delectus adipisci quos enim minima obcaecati aliquam? Blanditiis nulla corrupti, placeat iste, voluptatum cum laborum harum aliquam voluptas cupiditate, nihil totam fuga.",
      ortsangabe: "Schrank15, linkes Fach 14a 13b",
      anzahl: 15,
      status: "aktiv",
      artikelnummer: "1234512-12345da2"
    }
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("./routes/routes"));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
