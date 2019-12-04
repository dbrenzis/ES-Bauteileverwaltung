const selectUserTyp = document.getElementById('inputGroupSelect01')
selectUserTyp.addEventListener('change', switchform)

function switchform () {
  var opt = selectUserTyp.options[selectUserTyp.selectedIndex].value
  if (opt === 'hiwi') { document.getElementById('gruppenNummerDiv').style.display = 'none' } else document.getElementById('gruppenNummerDiv').style.display = ''
}

document.getElementById('button-save').addEventListener('click', () => {
  const id = document.getElementById('button-save').getAttribute('key')

  const name = document.getElementById('name').value
  console.log(name)
  const matrikelNummer = document.getElementById('matrikelNummer').value
  const email = document.getElementById('email').value
  const telefonNummer = document.getElementById('telefonNummer').value
  const gruppenNummer = document.getElementById('gruppenNummer').value

  var opt = selectUserTyp.options[selectUserTyp.selectedIndex].value

  var formData

  if (opt === 'studentuser') {
    formData = {
      name: name,
      matrikelNummer: matrikelNummer,
      email: email,
      telefonNummer: telefonNummer,
      gruppenNummer: gruppenNummer
    }
  } else {
    formData = {
      name: name,
      matrikelNummer: matrikelNummer,
      email: email,
      telefonNummer: telefonNummer
    }
  }

  if (id === '') {
    fetch('/benutzer', {
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
    fetch('/benutzer/' + id, {
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
