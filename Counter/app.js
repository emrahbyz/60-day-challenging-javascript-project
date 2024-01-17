const downButton = document.querySelector('.down-button')
const resetButton = document.querySelector('.reset-button')
const upButton = document.querySelector('.up-button')
const input=document.getElementById('counter') 

let count =0

input.addEventListener('change',()=>{
    count=input.value
})

downButton.addEventListener('click',()=>{
    count--
    input.value=count
})
resetButton.addEventListener('click',()=>{
    count=0
    input.value=count
})
upButton.addEventListener('click',()=>{
    count++
    input.value=count
})