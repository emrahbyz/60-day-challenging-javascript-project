const images =[
    'img/dice1.png',
    'img/dice2.png',
    'img/dice3.png',
    'img/dice4.png',
    'img/dice5.png',
    'img/dice6.png'
]
let dice = document.getElementById('dice-one')
let diceTwos = document.getElementById('dice-two')
const buttons = document.getElementById('buttons')
const text = document.getElementById('text')


function roll(){
let diceOne = Math.floor(Math.random()*6)
let diceTwo = Math.floor(Math.random()*6)
let total =  (diceOne+1) +(diceTwo+1)
dice.src=images[diceOne]
diceTwos.src=images[diceTwo]
text.textContent='Total'+ total
console.log(diceOne+diceTwo)

if(diceOne==diceTwo){
    alert('Tebrikler iki aynı zarı buldunuz')
}else{
      
    
}
}
buttons.addEventListener('click',roll)