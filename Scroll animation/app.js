const  element = document.querySelectorAll(".box");


window.addEventListener("scroll",checkBoxes)

checkBoxes()
function checkBoxes(){
    const triggerBotom =(window.innerHeight/6 )*4

    element.forEach((box)=>{
        const boxTop =box.getBoundingClientRect().top

        if(boxTop < triggerBotom){
            box.classList.add('show')
            
        }else{
            box.classList.remove('show')
        }
    })
}