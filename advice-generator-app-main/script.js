const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice');
const generateBtn = document.getElementById('generate-btn');

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceId.textContent = data.slip.id;
            adviceText.textContent = data.slip.advice;
        })
        .catch(error => console.error('Error:', error));
}

generateBtn.addEventListener('click', fetchAdvice);

// Llama a la función para obtener un consejo al cargar la página
fetchAdvice();

