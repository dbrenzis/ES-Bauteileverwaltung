document.getElementById('button-delete').addEventListener('click', () => {
  const id = document.getElementById('button-delete').getAttribute('key')
  const url = '/benutzer/' + id
  fetch(url, {
    method: 'DELETE'
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
  const ul = document.getElementById('names01')
  // Get lis from ul
  const li = ul.querySelectorAll('li.collection-item')

  // Loop through collection-item lis
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('div')[0]
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }

  // Get names ul
  const ul2 = document.getElementById('names02')
  // Get lis from ul
  const li2 = ul2.querySelectorAll('li.collection-item')

  // Loop through collection-item lis
  for (let i = 0; i < li2.length; i++) {
    const a = li2[i].getElementsByTagName('div')[0]
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li2[i].style.display = ''
    } else {
      li2[i].style.display = 'none'
    }
  }
}
