const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.querySelector('#item-list')
const clearBtn = document.getElementById('clear')
const filterInput = document.getElementById('filter')

function displayItems() {
  const itemsFromStorage = getItemsFromStorage()
  itemsFromStorage.forEach((item) => addItemToDom(item))
  checkUI()
}

//-- On ENTER or click on Add Item button while you're focused on the INPUT field
function onAddItemSubmit(e) {
  e.preventDefault()
  const newItem = itemInput.value

  if (newItem === '') {
    alert('Please add an item')
    return
  }

  addItemToDom(newItem) //using that text you entered, this will create the DOM element.
  addItemToStorage(newItem) //using that text you entered, this will create a new array element in the local storage array.
  checkUI()
  itemInput.value = ''
  console.log(getItemsFromStorage())
}

//-- Create and append a new list item
function addItemToDom(item) {
  // Create list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(item))
  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)
  itemList.appendChild(li)
}

//-- Create button for use in addItemToDom()
function createButton(classes) {
  const button = document.createElement('button')
  button.className = classes
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

//-- Create icon for button in createButton() for use in addItemToDom()
function createIcon(classes) {
  const icon = document.createElement('i')
  icon.className = classes
  return icon
}

//-- when you CLICK ITEM shit happens here
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItemFromStorage(e.target.parentElement.parentElement.textContent)
    e.target.parentElement.parentElement.remove()
  }
  console.log(e.target.tagName)
  if (e.target.tagName === 'LI') {
    
  }
}

function removeItem(e) {
  e.remove()
}

//-- Clear All Items
function clearItems() {
  let count = 0
  while (itemList.firstChild) {
    count++
    removeItemFromStorage(itemList.firstChild.textContent)
    itemList.removeChild(itemList.firstChild)
    console.log(count)
  }
  checkUI()
  itemInput.value = ''
  console.log(getItemsFromStorage())
}

//-- Filter Items
function filterItems() {
  const filterKey = filterInput.value.toLowerCase()

  Array.from(itemList.children).forEach((item) => {
    const txt = item.firstChild.textContent.toLowerCase()
    if (txt.includes(filterKey)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

//-- show or hide the FILTER field and CLEAR ALL button
function checkUI() {
  const items = itemList.querySelectorAll('li')

  if (items.length === 0) {
    clearBtn.style.display = 'none'
    filterInput.style.display = 'none'
  } else {
    clearBtn.style.display = 'block'
    filterInput.style.display = 'block'
  }
}

//-- Get current Items from Local Storage
function getItemsFromStorage() {
  let itemsFromStorage

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = []
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'))
  }
  return itemsFromStorage
}

//-- Add new Item to Local Storage
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage()
  itemsFromStorage.push(item)
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

//-- Remove item from localStorage
function removeItemFromStorage(item) {
  const itemsFromStorage = getItemsFromStorage()
  itemsFromStorage.splice(itemsFromStorage.indexOf(item), 1)
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

//--INITIALIZE app
function init() {
  itemForm.addEventListener('submit', onAddItemSubmit)
  itemList.addEventListener('click', onClickItem)
  clearBtn.addEventListener('click', clearItems)
  filterInput.addEventListener('keyup', filterItems)
  document.addEventListener('DOMContentLoaded', displayItems)
}

init()
