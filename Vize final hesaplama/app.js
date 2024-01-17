const inputone= document.getElementById('input1')
const inputtwo= document.getElementById('input2')
const buttons = document.getElementById('buttons')
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')





buttons.addEventListener('click',()=>{

    if(inputone.value>100 || inputtwo.value>100){
        alert('başka değer giriniz')
        return
    }
    result1 = (inputone.value*30)/100
    result2 = (inputtwo.value*70)/100
    sum = result1+result2
    text1.innerText=sum
    
    if(sum>=75 && sum<=100){
        text2.innerText='AA'
    }else if (sum>=50 && sum<=74){
        text2.innerText='BB'
    }else if (sum>=35 && sum<=49){
        text2.innerText='CC'
    }else{
        text2.innerText='FF'
    }
})