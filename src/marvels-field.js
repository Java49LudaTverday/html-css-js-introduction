const BLACK = 'black';
const RED = 'red';
const GREY = 'rgb(233, 245, 228)'
const N_LETTERS = 1;
const questions =[ "What is the official name of JavaScript?",
    "What attribute may used an old JavaScript, but now it is not required?",
    "What is name of block in JavaScript code, that can be executed when 'called' for?",
    "What exits a function?",
    "What one of words you can`t use as variables, labels, or function names?",
    "How is called fixed value in JavaScript?",
    "What element is the root of the HTML page?", "One of the Data Types in JavaScript?",
    "Which company developed JavaScript?", "What value is used to represent no value or no object?"
]
let question = "";
const answers = ["ecmascript", "type", "function", "return", "debugger", "literal", "html", "object", "netscape","null"];
const questionElem = document.querySelector(".question");
const letterElements = document.querySelector(".letters-guess");
let answer = "";
const header = document.querySelector(".header");
const informMessage = document.querySelector(".inform-message");
let wordGuess = [];
const welcom = document.querySelector(".welcom");
const introduction = document.querySelector(".introduction");
const inputLetter = document.getElementById("input-letter");
inputLetter.hidden = true;
const buttonPlay = document.querySelector(".button-play");
const buttonCansel = document.querySelector(".button-end");
buttonCansel.hidden = true;
let indPreviosly = 0;

function choiseQuestion (questions, answers) {
    let index = Math.floor(Math.random()*questions.length);
    if(index == indPreviosly){
        index = Math.floor(Math.random()*questions.length);
    }
    indPreviosly = index;
    question = questions[index];
    let answer = answers[index];    
    return answer;
}
function getDivElem (answer) {
    let answerAr = Array.from(answer);
    let divLetter = answerAr.map((letter, index) =>  `<div class="letter-elem">${answer[index]}</div>`);
    letterElements.innerHTML = divLetter.join ('');      
 }
function startPlay () {
    wordGuess = [];
    header.style.fontSize = "2em";
    answer = choiseQuestion(questions, answers);
    questionElem.innerHTML = question; 
    getDivElem(answer);    
    const letterDiv = document.querySelectorAll(".letter-elem");  
    hiddenLetters(letterDiv);    
    informMessage.innerHTML = "enter your answer";  
    hiddenElemStart ();   
}
function onChange(event) {  
    const letterDiv = document.querySelectorAll(".letter-elem");
    const letterGuess = event.target.value;
    let letterGuessLow = letterGuess.toLowerCase();
    let arLetGues = Array.from(letterGuessLow);
     event.target.value = '';
     let arAnswer = Array.from(answer);
     if (letterGuessLow.length > N_LETTERS && letterGuessLow.length != arAnswer.length) {
         alert(`Enter a letter or guess word`);
     } else {  
        let res = false;        
         arAnswer.forEach((elem, index) => {
            if (elem ==letterGuessLow || elem == arLetGues[index]){ 
                letterDiv[index].style.background = GREY;
                res = true;  
                wordGuess[index] = elem;                           
            } else {
                res;                                              
            }           
            rightOrWrong(res);  
            endOfGame (wordGuess);
            console.log(wordGuess);
         })
    }  
 } 
  function hiddenLetters (lettersDiv) {
    lettersDiv.forEach((elem) => elem.style.background = BLACK);
  }
function rightOrWrong(res){
        if(res) {
            informMessage.innerHTML = "right";
            informMessage.style.color = 'green';
        } else {
            informMessage.innerHTML = "wrong";
            informMessage.style.color = RED;
        }
}
function endOfGame (wordGuess) {
    let wordString = wordGuess.join('');
    if  (wordString == answer) {
        informMessage.innerHTML = "Congratulation - you are guessed!";
        buttonPlay.innerHTML = "play again";
        buttonPlay.hidden = false;
        inputLetter.hidden = true;
    } 
}
function canselPlay () {
    hiddenElemCansel ();
    informMessage.innerHTML = "";
    const letterDiv = document.querySelectorAll(".letter-elem");
    letterDiv.forEach((elem) => elem.hidden = true);
    buttonPlay.innerHTML = "play";
   
}
function hiddenElemStart () {
    inputLetter.hidden = false;
    welcom.hidden = true;
    introduction.hidden = true;
    buttonCansel.hidden = false; 
    questionElem.hidden = false;
    buttonPlay.hidden = true;
}
function hiddenElemCansel () {
     inputLetter.hidden = true;
     welcom.hidden = false;
     introduction.hidden = false;      
     buttonPlay.hidden = false; 
     buttonCansel.hidden = true; 
     questionElem.hidden = true;
 }