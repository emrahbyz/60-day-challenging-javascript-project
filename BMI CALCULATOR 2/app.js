const inputOne = document.getElementById('inputOne')
const inputTwo = document.getElementById('inputTwo')
const calculate = document.getElementById('calculate')
const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2')

function hesapla(){
   let valueOne= parseInt(inputOne.value)
   let valueTwo= parseInt(inputTwo.value)
   
   let deger = (valueOne / (valueTwo * valueTwo)*10000)
   value2.textContent=deger
   if(deger < 18.5){
    return 'zayıf knk'
   }else if(18.5 <= deger && deger <= 24.9){
   return 'normal'
   }else if(25 <= deger && deger <= 29.99){
    return 'kilolu'
   }else if(26 <= deger && deger <= 34){
    return 'obez'
   }else{
    return  'yanlış bişe girdiniz'
   }
  
}
calculate.addEventListener('click',()=>{
   
    value1.textContent=hesapla()
})






