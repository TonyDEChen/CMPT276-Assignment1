var currQ = 0;
var numQ = 3;
var maxQ = numQ-1;
var answers = new Array(numQ);
answers.fill(0);
// var ansInds = new Array(numQ);
// ansInds.fill(0);
// var key = ["None", 2, "An African or European swallow?"];
var key = [3, 2, 4];
// var keyInds = [3, 2, 4];

let goNext = function(evt){
    evt.preventDefault()
    if(document.querySelectorAll('input[name="q'+currQ+'"]:checked').length === 0){
        alert("Please select an answer.")
        console.log("no input")
    }else{
        if(currQ < maxQ){
            document.getElementById("question"+currQ).style.display="none"            
            currQ++
            document.getElementById("question"+currQ).style.display="inline"
            
            if(currQ == 1){
                document.getElementById("prev").style.visibility="visible"
            }
            if(currQ == maxQ){
                document.getElementById("next").style.visibility="hidden"
            }
        }
    }
}

let goPrev = function(evt){
    evt.preventDefault()
    if(currQ > 0){
        document.getElementById("question"+currQ).style.display="none"
        currQ--
        document.getElementById("question"+currQ).style.display="inline"

        if(currQ == maxQ-1){
            document.getElementById("next").style.visibility="visible"
        }
        if(currQ == 0){
            document.getElementById("prev").style.visibility="hidden"
        }
    }
}

let displayResult = function(evt){
    for(let i = 0; i < numQ; i++){
        answers[i] = document.querySelector('input[name="q'+i+'"]:checked').value;
    }

    let score = 0;
    // let result ="";
    for(let i = 0; i < maxQ+1; i++){
        result += "question "+(i+1);
        if(answers[i] == key[i]){
            score++;
        }else{
            wrongAns = document.querySelector('input[name="q'+i+'"]:checked').value
            document.getElementById("q"+i+"l"+wrongAns).classList.add("incorrectAnswer");
        }
        document.getElementById("question"+i).style.display="inline"
        let radButs = document.getElementsByName("q"+i);
        for(let j = 0; j < radButs.length; j++){
            radButs[j].disabled = true;
        }
        console.log("q"+i+"l"+keyInds[i])
        document.getElementById("q"+i+"l"+keyInds[i]).classList.add("correctAnswer");

    }

    // document.getElementById("question"+currQ).style.display="none"
    document.getElementById("buttons").style.display="none"
    document.querySelector("#result").innerHTML = "Score: "+score+"/"+numQ;
    document.getElementById("result").style.display="inline"
}

document.querySelector("#sub").addEventListener("click", displayResult)
document.querySelector("#next").addEventListener("click", goNext)
document.querySelector("#prev").addEventListener("click", goPrev)