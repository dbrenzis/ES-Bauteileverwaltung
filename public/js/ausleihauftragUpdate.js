document.getElementById('button-save').addEventListener('click', () => {
  const id = document.getElementById('button-save').getAttribute('key')

  const frist = document.getElementById('frist').value
fetch('/ausleihauftraege', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({frist:frist})
}).then(res => res.text())
  .then(res => {
    document.open()
    document.write(res)
    document.close()
  })