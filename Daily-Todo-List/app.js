const todoInput= document.getElementById('todo-input')
const todoBtn= document.getElementById('todo-button')
const todoSelect= document.getElementById('todo-select')
const todoDelete= document.getElementById('todo-delete')
const textOne= document.querySelector('.text-one')
const textTwo= document.querySelector('.text-two')
const todoText=document.getElementById('todo-text')
const ulClas = document.getElementById('ul-clas')


function textInfo() {
    

    if (todoInput.value == "" ) {
        
        textTwo.style.display = 'block';
        setInterval(() => {
            textOne.style.display = 'none'; // Diğerini gizle
        }, 1500);
       return false
        
    } else {
        textOne.style.display = 'block';
        setInterval(() => {
            textTwo.style.display = 'none'; // Diğerini gizle
        }, 1000);
       return true
       
    }
}

//! locale Storage







todoBtn.addEventListener('click',(e)=>{

    

    
    e.preventDefault()
    if(!textInfo()){
        return
    }
    const newTodo=document.createElement('div')
    newTodo.classList.add('todo')

    const newBtn= document.createElement('button')
    newBtn.classList='todo-check'
    newBtn.innerHTML='<i class="fa-solid fa-check" style="color: aliceblue;"></i>'
    newTodo.appendChild(newBtn)

    const newLi= document.createElement('li')
    newLi.classList.add('todo-item')
    newLi.innerHTML=todoInput.value
    newTodo.appendChild(newLi)

    const todoDelete = document.createElement('button');
    todoDelete.id = 'todo-delete';
    todoDelete.innerHTML = '<i class="fa-solid fa-minus" style="color: aliceblue;"></i>';
    newTodo.appendChild(todoDelete);
    ulClas.appendChild(newTodo)
   
    
    todoInput.value = "";
    
   
 todoDelete.addEventListener('click',()=>{
    newTodo.remove()
 })  
    
newBtn.addEventListener('click', updateCheck);


})

function updateCheck(e) {
    const item = e.target;
    if (item.classList.contains('todo-check')) {
        const todo = item.parentElement;
        todo.classList.toggle('ul-item');
    }
}

