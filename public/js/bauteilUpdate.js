document.getElementById('button-save').addEventListener('click', () => {
  const id = document.getElementById('button-save').getAttribute('key')
  console.log('log')

  const name = document.getElementById('name').getAttribute('value')
  const artikelNummer = document.getElementById('artikelNummer').getAttribute('value')
  const lagerort = document.getElementById('lagerort').getAttribute('value')
  const anzahl = document.getElementById('anzahl').getAttribute('value')
  const beschreibung = document.getElementById('beschreibung').getAttribute('value')
  var status = document.getElementById('status').checked

  if (status === true) { status = 'aktiviert' } else { status = 'deaktiviert' }

  const formData = new FormData()
  formData.append('name', name)
  formData.append('artikelNummer', artikelNummer)
  formData.append('lagerort', lagerort)
  formData.append('anzahl', anzahl)
  formData.append('beschreibung', beschreibung)
  formData.append('status', status)

  if (id === '') {
    fetch('/bauteile', {
      method: 'POST',
      body: formData
    }).then(res => res.text())
      .then(res => {
        document.open()
        document.write(res)
        document.close()
      })
  } else {
    fetch('/bauteile/' + id, {
      method: 'PUT',
      body: formData
    }).then(res => res.text())
      .then(res => {
        document.open()
        document.write(res)
        document.close()
      })
  }
})
