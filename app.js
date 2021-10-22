const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const btnReset = document.querySelector('#buttonReset');
const winningScoreSelect = document.querySelector('#playingTo');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

btn1.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
        isGameOver = true;
        score1.classList.add('has-text-success');
        score2.classList.add('has-text-danger');
        btn1.disabled = true;
        btn2.disabled = true;
        }
    score1.innerText = p1Score;
    }
});

btn2.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
        isGameOver = true;
        score2.classList.add('has-text-success');
        score1.classList.add('has-text-danger');
        btn1.disabled = true;
        btn2.disabled = true;
    }
    score2.innerText = p2Score;
    }
});

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

btnReset.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    score1.innerText = '0';
    score2.innerText = '0';
    score1.classList.remove('has-text-success', 'has-text-danger');
    score2.classList.remove('has-text-success', 'has-text-danger');
    btn1.disabled = false;
    btn2.disabled = false;
};



