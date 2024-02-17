const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const sizeDisplay = document.getElementById('size')
const clearBtn = document.getElementById('clear')
const colorDisplay = document.getElementById('color')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 10, isPressed=false, color = 'black', x, y

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e)=> {
    if(isPressed){
        x2 = e.offsetX
        y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x , y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2 
    ctx.stroke()
}

incrementBtn.addEventListener('click', ()=>{
    size += 5

    if( size > 50){
        size = 50
    }
    sizeDisplay.innerText = size
})

decrementBtn.addEventListener('click',()=>{
    size -= 5
    if( size < 5){
        size = 5
    }
    sizeDisplay.innerText = size
})

clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

colorDisplay.addEventListener('change', (e)=>{
    color = e.target.value
})