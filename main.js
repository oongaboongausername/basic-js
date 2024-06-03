const start = document.getElementById('startButton')
const stop = document.getElementById('stopButton')
const body = document.querySelector('body')
let interval;

function rand(){
    const red = Math.floor(Math.random() * 250)
    const green = Math.floor(Math.random() * 250)
    const blue = Math.floor(Math.random() * 250)
    return [red , green , blue] ;
}

const bodyChange = function(){
    const color = rand()
    body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`
}


start.addEventListener('click', function(){
    clearInterval(interval)
    interval = setInterval(bodyChange,0.00000000001)
})
stop.addEventListener('click', function(){
    clearInterval(interval)
    body.style.backgroundColor = 'white'
})

// function sayH(str){
//     console.log(str);
// }

// startButton.addEventListener('click',function() {
//     interval = setInterval(sayH,1000,'H')
// })
// stopButton.addEventListener('click',function() {
//     clearInterval(interval)
// })
