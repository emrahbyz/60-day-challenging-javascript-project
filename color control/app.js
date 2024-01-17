
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const checkButton = document.getElementById('checkButton');
    const textDiv=document.getElementById('textDiv')
    const bodyControl = document.body;
   


function colorCheck(){
 let red = redInput.value
 let green = greenInput.value
 let blue = blueInput.value



 let color ='rgb('+red+','+green+','+blue+')'
 bodyControl.style.backgroundColor=color
 textDiv.innerText=color
}
checkButton.addEventListener('click',()=>{
colorCheck()
})

