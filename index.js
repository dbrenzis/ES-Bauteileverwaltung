const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.use(express.static('./public'))

// DEF Temp. Code - Wird noch gelöscht
app.get('/', (req, res) => {
  res.render('index', { namen: 'Daniel Brenzis', userType: 'administrator' })
})

app.post('/benutzer', (req, res) => {
  res.send(req.body)
})

app.put('/benutzer/:id', (req, res) => {
  res.send(req.body)
})

app.delete('/benutzer/:id', (req, res) => {
  res.render('benutzerList', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    benutzerList: [
      {
        userType: 'hiwi',
        id: 2,
        name: 'Franz, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      },
      {
        userType: 'studentuser',
        id: 1,
        name: 'Franz, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      },
      {
        userType: 'studentuser',
        id: 2,
        name: 'Franz, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      }
    ]
  })
})

app.post('/bauteile', (req, res) => {
  res.send(req.body)
})

app.put('/bauteile/:id', (req, res) => {
  res.send(req.body)
})

app.delete('/bauteile/:id', (req, res) => {
  const user = {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    bauteilList: [
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      }
    ]
  }
  res.render('bauteilList', user)
})

app.get('/bauteile/bearbeiten/:id', (req, res) => {
  res.render('bauteilUpdate', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    anzahlausgeliehen: 12,
    bauteil: {
      name: 'Bauteil1',
      beschreibung:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto at, quas blanditiis, ipsa animi libero laboriosam vitae saepe sit et rerum cupiditate repellat odio quidem magni ratione nihil delectus adipisci quos enim minima obcaecati aliquam? Blanditiis nulla corrupti, placeat iste, voluptatum cum laborum harum aliquam voluptas cupiditate, nihil totam fuga.',
      ortsangabe: 'Schrank15, linkes Fach 14a 13b',
      anzahl: 15,
      status: 'aktiv',
      artikelNummer: '1234512-12345da2'
    }
  })
})

app.get('/bauteile/bearbeiten/', (req, res) => {
  res.render('bauteilUpdate', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    anzahlausgeliehen: 0,
    bauteil: {
      name: '',
      beschreibung: '',
      anzahl: 1,
      status: 'aktiv',
      artikelNummer: '',
      ortsangabe: ''
    }
  })
})

app.get('/benutzer/bearbeiten/:id', (req, res) => {
  res.render('benutzerUpdate', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    benutzer: {
      userType: 'hiwi',
      id: 1,
      name: 'Frank, Peter',
      matrikelNummer: '123125124',
      email: '14512518123123',
      telefonNummer: '123124124',
      gruppenNummer: 'G-123A'
    }
  })
})

app.get('/benutzer/bearbeiten/', (req, res) => {
  res.render('benutzerUpdate', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    benutzer: {
      userType: 'studentuser',
      name: '',
      matrikelNummer: '',
      email: '',
      telefonNummer: '',
      gruppenNummer: ''
    }
  })
})

app.get('/benutzer', (req, res) => {
  res.render('benutzerList', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    benutzerList: [
      {
        userType: 'hiwi',
        id: 1,
        name: 'Franz1, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      },
      {
        userType: 'hiwi',
        id: 2,
        name: 'Franz, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      },
      {
        userType: 'studentuser',
        id: 1,
        name: 'Franz, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      },
      {
        userType: 'studentuser',
        id: 2,
        name: 'Franz, Peter',
        matrikelNummer: '123515123',
        email: 'franz.peter@mail.de'
      }
    ]
  })
})

app.get('/testlogin', (req, res) => {
  res.render('index_login')
})

app.get('/bauteile', (req, res) => {
  const user = {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    bauteilList: [
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 2,
        name: 'Artikel2',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      }
    ]
  }
  res.render('bauteilList', user)
})

app.get('/bauteile/:id', (req, res) => {
  res.render('bauteil', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    anzahlausgeliehen: 12,
    bauteil: {
      name: 'Bauteil1',
      beschreibung:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto at, quas blanditiis, ipsa animi libero laboriosam vitae saepe sit et rerum cupiditate repellat odio quidem magni ratione nihil delectus adipisci quos enim minima obcaecati aliquam? Blanditiis nulla corrupti, placeat iste, voluptatum cum laborum harum aliquam voluptas cupiditate, nihil totam fuga.',
      ortsangabe: 'Schrank15, linkes Fach 14a 13b',
      anzahl: 15,
      status: 'aktiviert',
      artikelNummer: '1234512-12345da2'
    }
  })
})

app.get('/ausleihauftraege/:id', (req, res) => {
  res.render('ausleihauftrag', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    ausleihauftrag: {
      id: 1,
      auftragsNummer: 'A1901 - 12',
      status: 'angefragt',
      studentuser_gruppenNummer: 'G12-A',
      studentuser_name: 'Paul, Peter',
      studentuser_email: 'Test@mail.de',
      studentuser_telefonNummer: '10923812834',
      studentuser_matrikelNummer: '109238834',
      betreuer_name: 'Hiwi101',
      frist: '2019-11-27',
      kommentar:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolorem officiis sapiente harum soluta expedita quo, accusamus impedit accusantium dolor?'
    },
    bauteilList: [
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      }

    ]
  })
})

app.get('/ausleihauftraege/bearbeiten/:id', (req, res) => {
  res.render('ausleihauftragUpdate', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    ausleihauftrag: {
      id: 1,
      auftragsNummer: 'A1901 - 12',
      status: 'angefragt',
      studentuser_gruppenNummer: 'G12-A',
      studentuser_name: 'Paul, Peter',
      studentuser_email: 'Test@mail.de',
      studentuser_telefonNummer: '10923812834',
      studentuser_matrikelNummer: '109238834',
      betreuer_name: 'Hiwi101',
      frist: '2019-11-27',
      kommentar:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolorem officiis sapiente harum soluta expedita quo, accusamus impedit accusantium dolor?'
    },
    bauteilList: [
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      },
      {
        id: 1,
        name: 'Artikel1',
        beschreibung: 'Das ist eine neue Bschreibung mit toller länge',
        artikelNummer: '123-1234143',
        anzahl: 16
      }

    ]
  })
})

app.get('/ausleihauftraege', (req, res) => {
  res.render('ausleihauftraegeList', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    ausleihauftraegeList: [
      {
        id: 1,
        auftragsNummer: 'A1901 - 12',
        status: 'angefragt',
        studentuser_gruppenNummer: 'G12-A',
        betreuer_name: 'Hiwi101'
      },
      {
        id: 2,
        auftragsNummer: 'A1901 - 13',
        status: 'ausgeliehen',
        studentuser_gruppenNummer: 'G12-A',
        betreuer_name: 'Hiwi101'
      }
    ]
  })
})

app.delete('/ausleihauftraege/:id', (req, res) => {
  res.render('ausleihauftraegeList', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    ausleihauftraegeList: [
      {
        id: 1,
        auftragsNummer: 'A1901 - 12',
        status: 'angefragt',
        studentuser_gruppenNummer: 'G12-A',
        betreuer_name: 'Hiwi101'
      }
    ]
  })
})

app.put('/ausleihauftraege/:id', (req, res) => {
  res.render('ausleihauftraegeList', {
    namen: 'Daniel Brenzis',
    userType: 'administrator',
    ausleihauftraegeList: [
      {
        id: 1,
        auftragsNummer: 'A1901 - 12',
        status: 'ausgeliehen',
        studentuser_gruppenNummer: 'G12-A',
        betreuer_name: 'Hiwi101'
      },
      {
        id: 2,
        auftragsNummer: 'A1901 - 13',
        status: 'ausgeliehen',
        studentuser_gruppenNummer: 'G12-A',
        betreuer_name: 'Hiwi101'
      }
    ]
  })
})

app.use(require('./routes/routes'))

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
