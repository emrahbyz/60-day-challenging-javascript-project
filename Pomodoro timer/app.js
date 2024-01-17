let minute;  // Dakikaları saklamak için değişken
let second;  // Saniyeleri saklamak için değişken

// 'study' elementi üzerinde 'click' olayı için bir olay dinleyici
study.addEventListener('click', () => {
  studyBreak(25);  // 25 dakikalık bir çalışma arasını başlatmak için studyBreak fonksiyonunu çağırır
  
});

// studyBreak fonksiyonunun tanımı, bir parametre 'x' alır (dakikaları temsil eder)
function studyBreak(x) {
  minute = x;     // 'minute' değişkeninin değerini giriş dakikalarına ayarlar
  second = "00";  // 'second' değişkenini "00" olarak ayarlar

  // Belirli bir aralıkta çalışacak bir interval fonksiyonu
  let inter = setInterval(function () {
    if (second == 0 && minute == 0) {
      clearInterval(inter);
      timer.innerHTML = "00:00";  // Zamanlayıcıyı "00:00" olarak ayarlar

    } else if (second == 0) {
      minute = minute - 1;
      second = 59;
      timer.innerText = `${minute}:${second}`;  // Zamanlayıcıyı günceller

    } else if (second > 0) {
      second = second - 1;
      timer.innerText = `${minute}:${second}`;  // Zamanlayıcıyı günceller
    }
  }, 1000);

   // Fonksiyondan çıkış
}
