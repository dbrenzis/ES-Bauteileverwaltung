document.getElementById('button-delete').addEventListener('click', () => {
  const id = document.getElementById('button-delete').getAttribute('key')
  const url = '/ausleihauftraege/' + id
  fetch(url, {
    method: 'DELETE'
  }).then(res => res.text())
    .then(res => {
      document.open()
      document.write(res)
      document.close()
    })
})

document.getElementById('button-accept').addEventListener('click', () => {
  const id = document.getElementById('button-accept').getAttribute('key')
  const url = '/ausleihauftraege/' + id
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: 'ausgeliehen' })
  }).then(res => res.text())
    .then(res => {
      document.open()
      document.write(res)
      document.close()
    })
})

// Get input element + Search Listener
const filterInput = document.getElementById('filterInput')
filterInput.addEventListener('keyup', filterNames)

function filterNames () {
  // Get value of input
  const filterValue = document.getElementById('filterInput').value.toUpperCase()

  // Get names ul
  const ul = document.getElementById('names')
  // Get lis from ul
  const li = ul.querySelectorAll('li.collection-item')

  // Loop through collection-item lis
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('a')[0]
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}
