window.onload = loadPage

function loadPage() {
moveDoggo()
}


function moveDoggo() {
let img = document.querySelector('img')
let x = 0
let y = 0

let speedY = 1
const accY = 0.1

window.addEventListener('keyup', function(event){
    console.log(event)
        
   speedY = -10
    
    }) 
  

setInterval(function() {
    img.style.left = x + 'px'
    x++

    speedY += accY
    y -= speedY

    if(y < 0) {
        y = 0
        speedY = 0
    }

    if(x > window.innerWidth) {
        x = -100
    }

    img.style.bottom = y + 'px'


},10)
}
