// DOM elemanlarını seçme
const inputText1 = document.getElementById('input-text');
const inputText2 = document.getElementById('input-text2');
const select1 = document.getElementById('option1');
const select2 = document.getElementById('option4');

// Dönüşüm fonksiyonu
function convertTemperature() {
  // Giriş ve çıkış birimlerini al
  const fromUnit = select1.value;
  const toUnit = select2.value;

  // Giriş değerini al
  const inputValue = parseFloat(inputText1.value);

  // Dönüşüm yap
  let result;

  if (fromUnit === 'Celsius') {
    if (toUnit === 'Fahrenheit(°C)') {
      result = (inputValue * 9/5) + 32;
    } else if (toUnit === 'Kelvin(°C)') {
      result = inputValue + 273.15;
    } else if (toUnit === 'Celsius') {
      result = inputValue;
    } else {
      console.log('Geçersiz birim');
    }
  } else if (fromUnit === 'Fahrenheit(°C)') {
    // Fahrenheit'dan diğer birimlere dönüşüm yapmak için gerekli işlemleri burada yapın
  } else if (fromUnit === 'Kelvin(°C)') {
    // Kelvin'den diğer birimlere dönüşüm yapmak için gerekli işlemleri burada yapın
  } else {
    console.log('Geçersiz birim');
  }

  // Sonucu ekrana yazdır
  inputText2.value = result.toFixed(2);
}

// Etkileşimleri dinle
inputText1.addEventListener('input', convertTemperature);
select1.addEventListener('change', convertTemperature);
select2.addEventListener('change', convertTemperature);


