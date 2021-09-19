  
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const ballDiameter = 20
const boardWidth = 1500
const boardHeight = 600
let xDirection = -2
let yDirection = 2

const userStart = [230, 10]
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart

let timerId8
let score = 0

//my block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    this.topLeft = [xAxis, yAxis + blockHeight]
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
  new Block(10, 300),
  new Block(120, 300),
  new Block(230, 300),
  new Block(340, 300),
  new Block(450, 300),
  new Block(10, 330),
  new Block(120, 330),
  new Block(230, 330),
  new Block(340, 330),
  new Block(450, 330),
  new Block(10, 360),
  new Block(120, 360),
  new Block(230, 360),
  new Block(340, 360),
  new Block(450, 360),
  new Block(560, 270),
  new Block(670, 270),
  new Block(780, 270),
  new Block(890, 270),
  new Block(1000, 270),
  new Block(1110, 270),
  new Block(1220, 270),
  new Block(1330, 270),
 
  new Block(560, 240),
  new Block(670, 240),
  new Block(780, 240),
  new Block(890, 240),
  new Block(1000, 240),
  new Block(1110, 240),
  new Block(1220, 240),
  new Block(1330, 240),
  new Block(560, 210),
  new Block(670, 210),
  new Block(780, 210),
  new Block(890, 210),
  new Block(1000, 210),
  new Block(1110, 210),
  new Block(1220, 210),
  new Block(1330, 210),
  
  new Block(560, 300),
  new Block(670, 300),
  new Block(780, 300),
  new Block(890, 300),
  new Block(1000, 300),
  new Block(1110, 300),
  new Block(1220, 300),
  new Block(1330, 300),
 
  new Block(560, 330),
  new Block(670, 330),
  new Block(780, 330),
  new Block(890, 330),
  new Block(1000, 330),
  new Block(1110, 330),
  new Block(1220, 330),
  new Block(1330, 330),
  
  new Block(560, 360),
  new Block(670, 360),
  new Block(780, 360),
  new Block(890, 360),
  new Block(1000, 360),
  new Block(1110, 360),
  new Block(1220, 360),
  new Block(1330, 360),
  
]

//draw my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'  
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'  
    grid.appendChild(block)
    console.log(blocks[i].bottomLeft)
  }
}
addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()

//move user
function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 60
        console.log(currentPosition[0] > 0)
        drawUser()   
      }
      break
    case 'ArrowRight':
      if (currentPosition[0] < (boardWidth - blockWidth)) {
        currentPosition[0] += 60
        console.log(currentPosition[0])
        drawUser()   
      }
      break
  }
}
document.addEventListener('keydown', moveUser)

//draw User
function drawUser() {
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}

//draw Ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}
timerId = setInterval(moveBall, 10)

//check for collisions
function checkForCollisions() {
  //check for block collision
  for (let i = 0; i < blocks.length; i++){
    if
    (
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
      ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
    )
      {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      allBlocks[i].classList.remove('block')
      blocks.splice(i,1)
      changeDirection()   
      score++
      scoreDisplay.innerHTML = score
      if (blocks.length == 0) {
        scoreDisplay.innerHTML = 'You are a persistance person :)'
        clearInterval(timerId)
        document.removeEventListener('keydown', moveUser)
      }
    }
  }
  // check for wall hits
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
  {
    changeDirection()
  }

  //check for user collision
  if
  (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight ) 
  )
  {
    changeDirection()
  }

  //game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId)
    scoreDisplay.innerHTML = 'You can try again!!!'
    document.removeEventListener('keydown', moveUser)
  }
}


function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}