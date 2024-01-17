const todoİnput = document.getElementById("todo-input")
const addBtn=document.getElementById("add-button")
const clearBtn=document.getElementById("clear-button")
const inputText = document.getElementById("input-text")
const todoButton = document.getElementById('todo-button')
//önce paragraf diye bir şey oluştur bu paragrafın amacı bir p etiketi oluşturcaz bu yeni p etiketini inputtextimizin içine koyacaz ve bu da inputun valuesine eşit oalcak mantık bu 
console.log(inputText)


addBtn.addEventListener('click',()=>{
   let paragraph = document.createElement('p')
   paragraph.classList.add('paragraph-style')
   inputText.appendChild(paragraph)
   paragraph.innerHTML=todoİnput.value

   
   paragraph.addEventListener('dblclick',()=>{
    inputText.removeChild(paragraph)
    })

    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration='line-through'

        
        })
    
   clearBtn.addEventListener('click',()=>{
   paragraph.remove()
})
})
