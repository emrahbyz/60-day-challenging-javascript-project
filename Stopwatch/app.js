const getSecond = document.getElementById('second')
const getTens = document.getElementById('munite')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let seconds = 0
let tens = 0
let interval // interval metodu oluşturuyorum bu şuan için tanımsız bir metot

start.addEventListener('click',()=>{ 
 interval = setInterval(timer,10) // intervali tanımlıyorum setınterval ile timer fonksiyonumu cağırıyorum 

    
})

stop.addEventListener('click',()=>{
   clearInterval(interval) // 
   console.log(interval)
  
})
reset.addEventListener('click',()=>{
  
seconds='00'
tens='00'
getSecond.innerHTML=seconds
getTens.innerHTML=tens

})

function timer(){ // foknsiyon içinde çalıştırıyorum bunu 
    tens++
if(tens<=9){ // eğer salise 9'dan küçükse innerHtmlini ' '0' string ifadesi ile birleştir yani 0+(tensin o anki değeri) örnek 04 05 06 gibi değerleri
 getTens.innerHTML='0'+tens
}
if(tens>9){ // tens 9dan büyük olursa 
 getTens.innerHTML=tens  // tens 9 dan büyükse tensin değeri tensin o anki değerine eşitle yani tens 10 oldu diyleim o zaman tensin o anki değeri innnerHtml değeridir
}
if(tens>99){ // tens 99dan büyük olursa yani 99ms 
 seconds++ // saniyeyi arttır
 getSecond.innerHTML='0'+seconds // saniyenin innerHtmli '0' string ifadesi ile birleştir yani 0+(saniyenin o anki değeri) örnek 04 05 06 gibi değerleri
 tens=0 // tensi 0 'a eşitle
 getTens.innerHTML='0'+tens //  // eğer salise 9'dan küçükse innerHtmlini ' '0' string ifadesi ile birleştir yani 0+(tensin o anki değeri) örnek 04 05 06 gibi değerleri
}if(seconds>9){// eğer saniye 9 dan büyükse 
 getSecond.innerHTML=seconds // saniyenin innerhtmli saniyenin o anki değerine eşit
}
}





