url = 'jubileu.mp3'
audio = new Audio(url);

const hexElements = ['A', 'B', 'C', 'D', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let color = '#'
let tocando = false

const btn1 = document.querySelector('.play')
const btn2 = document.querySelector('.pause')
const btn3 = document.querySelector('.up')
const btn4 = document.querySelector('.down')
const ctn = document.querySelector('.container')

const jbImg = document.querySelector('.jb-img')
const body = document.querySelector('body')

console.log(jbImg)

btn1.onclick = function(){
    audio.play()
    tocando = true
    jbImg.src = 'jubileu.GIF'
    setTimeout(function(){
        jbImg.src = 'jubileu2.png'
        tocando = false
        color = '#383535'
        body.style.backgroundColor = color
    }, 37068)
}

btn2.onclick = function(){
    audio.pause()
    tocando = false
    jbImg.src = 'jubileu2.png'
    color = '#383535'
    body.style.backgroundColor = color
}

btn3.onclick = function(){
    audio.volume += 0.1
}

btn4.onclick = function(){
    audio.volume -= 0.1
}

var generateColor = setInterval(function() {
    if(tocando){
        let index = 0
        for(let i = 0; i<6; i++){
        index = Math.floor(Math.random() * 6 + 1)
        color += hexElements[index]
        // console.log(hexElements[index])
        }
        // console.log(color)
        body.style.backgroundColor = color
        color = '#'
    }
}, 200);

var showCurrentTime = setInterval( function() {
    console.log('Current time: '+audio.currentTime)
}, 1000)


