const boxControl = document.querySelectorAll(".buttonType")

boxControl.forEach((toggle) => {
    toggle.addEventListener('click',()=>{
    toggle.parentNode.classList.toggle('active')
    })
    
});