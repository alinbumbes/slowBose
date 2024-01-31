const list = document.querySelector('#list-box')
const input = document.querySelector('#input-box')
const addBtn = document.querySelector('#add-btn')
const clearBtn = document.querySelector('#clear-btn')

function addItem() {
  if (input.value !== '') {
    const task = input.value
    console.log(task)
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
  
  else {
    input.classList.add('error')
    input.setAttribute('placeholder', 'Write your task here, brah !!!')
    setTimeout(() => {
      input.classList.remove('error')
      input.setAttribute('placeholder', 'Enter your task here')
    }, 3000)
  }
  input.focus();
}

function clearItems() {
  console.log('clear')
  while (list.firstChild) {
    list.removeChild(list.firstChild)
    console.log(list.firstChild)
  }
  input.focus();
}


input.addEventListener('keyDown', (e) => {
  console.log(e.key)
})

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addItem()
  }
  console.log(e.key)
})

addBtn.addEventListener('click', addItem)
clearBtn.addEventListener('click', clearItems)
