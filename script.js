
const firstCon = document.querySelector('.container__first');
const secondCon = document.querySelector('.container__second');
const thirdCon = document.querySelector('.container__third');
const errorMsg = document.querySelector('.error-msg');
const mathCon = document.querySelector('.math-container');
const restartBtn = document.querySelector('.restart-btn');
const submitBtn = document.querySelector('.submit-btn');
const startBtn = document.querySelector('.start-btn');
const endHead = document.querySelector('#header-third');
const endWord = document.querySelector('#text-third');

let guessNum;
let guessDiv;
let endEqual;
let symbol;
let types;
let newElement;

const startUp = () => {
    guessDiv = undefined;
    
    firstCon.style.display = 'flex';
    secondCon.style.display = 'none';
    thirdCon.style.display = 'none';
    errorMsg.style.display = 'none';
    startBtn.addEventListener('click', showSecond);
    debugger;
}

const showSecond = () => {
    firstCon.style.display = 'none';
    secondCon.style.display = 'flex';
    thirdCon.style.display = 'none';
    generateEqual();
    debugger;
}

const generateEqual = () => {
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    let type = Math.floor(Math.random() * 3);
    let randomNum = Math.floor(Math.random() * 4);

    if(type === 0){
        symbol = "+"
        endEqual = num1 + num2;
        types = [num1, num2, symbol, endEqual];
        guessNum = types[randomNum];
        types[randomNum] = `<input class='guess' placeholder = '?'>`;
    } else if (type === 1){
        symbol = "-"
        if(num2 > num1){
            [num1,num2] = [num2,num1]
        };
        endEqual = num1 - num2;
        types = [num1, num2, symbol, endEqual];
        guessNum = types[randomNum];
        types[randomNum] = `<input class='guess' placeholder = '?'>`;
    } else if (type === 2){
        symbol = "*"
        endEqual = num1 * num2;
        types = [num1, num2, symbol, endEqual];
        guessNum = types[randomNum];
        types[randomNum] = `<input class='guess' placeholder = '?'>`;
    }
    createDiv();
    debugger;
};

const createDiv = () => {
        newElement = document.createElement('div');
        newElement.classList.add('remove-after');
        newElement.innerHTML = `${types[0]} ${types[2]} ${types[1]} = ${types[3]}`;
        mathCon.appendChild(newElement);
}

submitBtn.addEventListener('click', () => {
    guessDiv = document.querySelector('.guess');
    if(guessDiv.value != ''){
        checkMath();
    } else {
        errorMsg.style.display = 'flex';
     }
    });

const checkMath = () => {
    debugger;
        if(guessDiv.value == guessNum){
            firstCon.style.display = 'none';
            secondCon.style.display = 'none';
            thirdCon.style.display = 'flex';
            endHead.textContent = 'NICE ! :)';
            endWord.textContent = 'Good job ! :)';
        } else {
            firstCon.style.display = 'none';
            secondCon.style.display = 'none';
            thirdCon.style.display = 'flex';
            endHead.textContent = 'Try agian!';
            endWord.textContent = 'Never give up :)';
        }};
        debugger;

const deleteData = () => {
    let removed = document.querySelector('.remove-after');
    removed.parentNode.removeChild(removed);
    startUp();
    debugger;
}

restartBtn.addEventListener('click', deleteData);
window.addEventListener('load',startUp);