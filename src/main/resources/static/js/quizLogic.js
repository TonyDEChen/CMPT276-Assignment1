var currQ = 0;
var numQ = 3;
var maxQ = numQ-1;
var answers = new Array(numQ);
answers.fill(0);
var key = [3, 2, 1];

// let checkAns = function(evt){
//     evt.preventDefault()
//     if(document.querySelectorAll('input[name="q'+currQ+'"]:checked').length === 0){
//         console.log("no input")
//     }else{
//         var ans = document.querySelector('input[name="q'+currQ+'"]:checked').value
//         console.log(ans)
//         answers[numQ] = ans;
//     }
// }

let goNext = function(evt){
    evt.preventDefault()
    if(document.querySelectorAll('input[name="q'+currQ+'"]:checked').length === 0){
        alert("Please select an answer.")
        console.log("no input")
    }else{
        if(currQ < maxQ){

            answers[currQ] = document.querySelector('input[name="q'+currQ+'"]:checked').value;
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
    answers[maxQ] = document.querySelector('input[name="q'+currQ+'"]:checked').value;

    let result = "RESULTS:<br>";
    for(let i = 0; i < maxQ+1; i++){
        // console.log(i)
        result += "question "+(i+1);
        if(answers[i] == key[i]){
            result += ": correct<br>"
        }else{
            result += ": incorrect<br>"
        }
    }
    document.querySelector("#result").innerHTML = result;
    // document.querySelector(".questions").style.display="none"
    // document.querySelector('.questions').setAttribute("style", "display:none")
    document.getElementById("question"+currQ).style.display="none"
    document.getElementById("buttons").style.display="none"
    document.getElementById("result").style.display="inline"
}

document.querySelector("#sub").addEventListener("click", displayResult)
document.querySelector("#next").addEventListener("click", goNext)
document.querySelector("#prev").addEventListener("click", goPrev)