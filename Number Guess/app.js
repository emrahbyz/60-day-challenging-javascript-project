const girdi = document.querySelector('input')
const result = document.getElementById('result')
const text = document.getElementById('text')




let sonuc =parseInt(Math.random()*10)+1


result.addEventListener('click',()=>{

tekrarOyna()

})
function tekrarOyna(){
    let test = girdi.value
    if(test==""){
        text.innerText='Bir cevap girmediniz'
        text.style.fontSize='24px'
    }
    else if(sonuc>test){
        text.innerText='Daha yüksek bir sayı giriniz.'
    }else if(sonuc<test){
        text.innerText='Daha küçük bir sayı giriniz.'

    }else{
        text.innerText='Doğru cevap verdin hımmıl'
       sonuc =parseInt(Math.random()*10)+1
        girdi.value =''
   console.log(sonuc)
    }
}