function submitQuiz() {
    const answers = {
        q1: 'A',
        q2: 'B',
        q3: 'A'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const results = document.getElementById('results');

    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value
    };

    for (const question in userAnswers) {
        if (userAnswers[question] === answers[question]) {
            score++;
        }
    }

    results.textContent = `You scored ${score} out of ${Object.keys(answers).length}!`;

    resultContainer.classList.remove('hidden');
}
