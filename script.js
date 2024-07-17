function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = `मैच ड्रा , आप दोनों ने पसंद किया  ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `आप जीत गए  ${userChoice} हराया  ${computerChoice}.`;
    } else {
        result = `आप हार गए  ${computerChoice} हराया ${userChoice}.`;
    }

    document.getElementById('result').innerText = result;
}