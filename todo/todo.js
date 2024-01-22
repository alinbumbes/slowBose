const list = document.querySelector('#list-box')
const input = document.querySelector('#input-box')
const addBtn = document.querySelector('#add-btn')
const clearBtn = document.querySelector('#clear-btn')

function addItem() {
  const task = input.value
  const li = document.createElement('li')
  li.innerHTML = `
   <div class="list-item-box">
       <p class="pm">${task}</p>
       <button class="deleteMe"></button>
   </div>
`

  const deleteBtn = li.querySelector('.deleteMe')
  deleteBtn.addEventListener('click', () => li.remove())
  input.value = ''
  list.insertAdjacentElement('beforeend', li)
}

function clearItems() {
  console.log('clear')
  while (list.firstChild) {
    list.removeChild(list.firstChild)
    console.log(list.firstChild)
  }
}
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem()
  }
})
addBtn.addEventListener('click', addItem)
clearBtn.addEventListener('click', clearItems)
