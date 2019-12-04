document.getElementById('button-save').addEventListener('click', () => {
  const id = document.getElementById('button-save').getAttribute('key')

  const name = document.getElementById('name').value
  const artikelNummer = document.getElementById('artikelNummer').value
  const lagerort = document.getElementById('lagerort').value
  const anzahl = document.getElementById('anzahl').value
  const beschreibung = document.getElementById('beschreibung').value
  var status = document.getElementById('status').checked

  if (status === true) { status = 'aktiviert' } else { status = 'deaktiviert' }

  var formData = {
    name: name,
    artikelNummer: artikelNummer,
    lagerort: lagerort,
    anzahl: anzahl,
    beschreibung: beschreibung,
    status: status
  }

  if (id === '') {
    fetch('/bauteile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => res.text())
      .then(res => {
        document.open()
        document.write(res)
        document.close()
      })
  } else {
    fetch('/bauteile/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => res.text())
      .then(res => {
        document.open()
        document.write(res)
        document.close()
      })
  }
})
