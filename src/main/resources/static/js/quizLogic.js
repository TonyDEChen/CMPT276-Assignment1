var currQ = 0; // current question
var numQ = 3; // number of question
var maxQ = numQ-1; // last question #
var answers = new Array(numQ); // store user answers
answers.fill(0);
var key = [3, 2, 4]; // store answer key

// go to the next question if user has selected an option
let goNext = function(evt){
    evt.preventDefault()
    if(document.querySelectorAll('input[name="q'+currQ+'"]:checked').length === 0){ // check for input
        alert("Please select an answer.")
        console.log("no input")
    }else{
        if(currQ < maxQ){ // check bounds
            document.getElementById("question"+currQ).style.display="none" // hide current question
            currQ++
            document.getElementById("question"+currQ).style.display="inline" // display next question
            
            if(currQ == 1){ // show prev button on all but first question
                document.getElementById("prev").style.visibility="visible"
            }
            if(currQ == maxQ){
                document.getElementById("next").style.visibility="hidden" // hide next button on last question
                document.getElementById("sub").style.visibility="visible" // show submit button on last question
            }
        }
    }
}

// go to the previous question
let goPrev = function(evt){
    evt.preventDefault()
    if(currQ > 0){ // check bounds
        document.getElementById("question"+currQ).style.display="none" // hide current question
        currQ--
        document.getElementById("question"+currQ).style.display="inline" // display previous question

        if(currQ == maxQ-1){
            document.getElementById("next").style.visibility="visible" // show next button on all but last question
            document.getElementById("sub").style.visibility="hidden" // hide submit button on all but last question
        }
        if(currQ == 0){
            document.getElementById("prev").style.visibility="hidden" // hide prev button on first question
        }
    }
}

// end quiz and display results
let displayResult = function(evt){
    for(let i = 0; i < numQ; i++){ // store answers
        answers[i] = document.querySelector('input[name="q'+i+'"]:checked').value;
    }

    let score = 0;
    for(let i = 0; i < maxQ+1; i++){
        if(answers[i] == key[i]){ // tally score
            score++;
        }else{ // display incorrect answers in red
            wrongAns = document.querySelector('input[name="q'+i+'"]:checked').value
            document.getElementById("q"+i+"l"+wrongAns).classList.add("incorrectAnswer");
        }
        document.getElementById("question"+i).style.display="inline" // display answers
        
        let radButs = document.getElementsByName("q"+i); // disable buttons
        for(let j = 0; j < radButs.length; j++){
            radButs[j].disabled = true;
        }

        console.log("q"+i+"l"+key[i])
        document.getElementById("q"+i+"l"+key[i]).classList.add("correctAnswer"); // display correct answers in green

    }

    document.getElementById("buttons").style.display="none" // disable prev submit next buttons
    document.querySelector("#result").innerHTML = "Score: "+score+"/"+numQ; // display final score
    document.getElementById("result").style.display="inline" 
    document.querySelector("main").style.top = "50%"
}

document.querySelector("#sub").addEventListener("click", displayResult) // on submit click
document.querySelector("#next").addEventListener("click", goNext) // on next click
document.querySelector("#prev").addEventListener("click", goPrev) // on prev click