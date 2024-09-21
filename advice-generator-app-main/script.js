document.getElementById('new-advice').addEventListener('click', fetchAdvice);

async function fetchAdvice() {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const advice = response.data.slip.advice;
        document.getElementById('advice').textContent = advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}
