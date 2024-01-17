const content = document.getElementById('content')
const speed = document.getElementById('speed')
const text ='I am a computer science student and front-end developer'
let idx =1
let speedEl = 300 / speed.value

writeText()

function writeText(){
    content.innerHTML=text.slice(0,idx)
    idx++
    if(idx>text.length){
       idx=1
    }

    setTimeout(writeText,speedEl)
}
speed.addEventListener('input',(e)=>(speedEl = 300 / e.target.value))