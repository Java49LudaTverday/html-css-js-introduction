const word = "table";
const N_LETTERS = 5;
const MAX_TRIALS = 6;
const letterElements = document.querySelectorAll(".letter-guess");
const elemTrials = document.querySelector(".trials");
const playButton = document.querySelector(".button-play");
let trials = 0;
function onChange(event) {
   const wordGuess = event.target.value;
    event.target.value = ''; 
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {       
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l , i) => letterElements[i]. innerHTML = l);
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = index == i ? 'green' : 'yellow';
            }
            return res;
        })
        console.log(colors);
        colors.forEach((c, i) => letterElements[i].style.color=c);
        trials +=1;
        guessTrial(trials, colors);
    }    
}
function guessTrial (trials, colors) {
    if (trials < MAX_TRIALS){
        elemTrials.innerHTML = "You have a " + (MAX_TRIALS-trials) +  " trials";
        if (youWon (colors)){
            elemTrials.innerHTML = "Congratulations - you have guessed word!";
            elemTrials.style.color = 'green';
            stopPlay();      
        }
    } else {
        elemTrials.innerHTML = "Sorry - your guess trials have ended up!";
        elemTrials.style.color = 'red';
        stopPlay ();      
    };
}
function youWon (colors) {
        let res = true;
        colors.forEach (e => {
            if (e != "green") {
             res = false; 
            }         
         return res;
        })
        return res;
}

function stopPlay () {
        document.getElementById("123").disabled = true;
        trials = 0;
        let text = 'Do you want to play?';
        document.querySelector(".play").innerHTML = text;
        playButton.style.display = "";
}

function offerToPlay () {
        document.getElementById("123").disabled = false;
        document.querySelector(".play").innerHTML = "";
        elemTrials.innerHTML = "";
        letterElements.forEach((e,i) => letterElements[i].innerHTML = ""); 
        playButton.style.display = "none";        
}

