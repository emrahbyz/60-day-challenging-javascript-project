    const numberInput = document.getElementById('numberInput');
    const buttonGenerate = document.getElementById('generate');
    const contentContainer = document.querySelector('.content');

    buttonGenerate.addEventListener('click', () => {
        const inputValue = parseInt(numberInput.value);
        
    
        if (!isNaN(inputValue)) {
            contentContainer.innerHTML = ''; // Önceki içeriği temizle
        
            for (let i = 1; i <= inputValue; i++) {
                let h1 = document.createElement('h1');
                h1.className = 'generatedNumber';
                h1.innerHTML = i;
                
                contentContainer.appendChild(h1);
                if (i % 2 === 0) {
                    h1.style.color = 'green';
                } else {
                    h1.style.color = 'blue';
                }
            }
        } else {
            alert('Lütfen geçerli bir sayı girin.');
        }
    });


   


