const buttonAc = document.getElementById("modal-ac")
const modal = document.querySelector(".modal")
const modalKapat= document.getElementById("modal-kapat")
const denemeyiBaslat=document.getElementById("form-button")

modalKapat.addEventListener("click", () => {
  
    modal.style.display="none";
});

buttonAc.addEventListener("click", () => {
  
    modal.style.display="flex";
});

denemeyiBaslat.addEventListener("onclick",()=>{
   
   
})
