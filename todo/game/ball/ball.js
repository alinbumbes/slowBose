const ball = document.querySelector('.ball')
console.log(ball)
function moveLeft() {
  console.log('left')
  ball.style.left = ball.offsetLeft - 20 + 'px'
}

function moveRight() {
  console.log('right')
  ball.style.left = ball.offsetLeft + 20 + 'px'
}

function moveUp() {
  console.log('up')
  ball.style.top = ball.offsetTop - 20 + 'px'
}

function moveDown() {
  console.log('down')
  ball.style.top = ball.offsetTop + 20 + 'px'
}

document.addEventListener('keydown', (e) => {
  console.log(e.key)
  switch (e.key) {
    case 'ArrowLeft':
      moveLeft()
      break
    case 'ArrowRight':
      moveRight()
      break
    case 'ArrowUp':
      moveUp()
      break
    case 'ArrowDown':
      moveDown()
      break
    case ' ':
      moveDown()
      break
    default:
      break
  }
})
