// var n = window.prompt("name?", "Bobby")
// // window.alert("hello " + n)
// console.log("hello " + n)
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// window.addEventListener('keypress', processKey
// function processKey(evt){
//     console.log(evt)
// }

// var button = document.querySelector('input[value="submit"]')
// button.addEventListener('click', function(evt){
//     evt.preventDefault()
//     // document.getElementById('q1').value
//     var ans1 = document.querySelector("#q1").selectedIndex
//     console.log(ans1);
// })

var answers = [];
var key = [2, 3, 1, 1];
var currQ = 1;

let fn1 = function(evt){
    evt.preventDefault()
    var ans1 = document.querySelector('input[name="q1"]:checked').value; 
    console.log(ans1)

    if(ans1 == 0){
        document.querySelector("#result").innerHTML = "select an answer"
        console.log("no input")
        document.getElementById("result").style.display="inline"
    }else{
        if(ans1 == 2){
            console.log("correct")
            document.querySelector("#result").innerHTML = "correct"
            document.getElementById("result").style.color = "green"
        }else{
            console.log("incorrect")
            document.querySelector("#result").innerHTML = "incorrect"
            document.getElementById("result").style.color = "red"
        }
        document.getElementById("result").style.display="inline"
    }
    answers.push(ans1);
    // document.querySelector("#result").innerHTML = ans1
}

let checkAns = function(evt){
    
}

document.querySelector("#sub").addEventListener("click", fn1)