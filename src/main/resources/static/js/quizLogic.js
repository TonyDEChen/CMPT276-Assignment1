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
var key = [3, 2, 1, 1];
var currQ = 0;
var maxQ = 2;

// let fn1 = function(evt){
//     evt.preventDefault()
//     var ans1 = document.querySelector('input[name="q1"]:checked').value
//     // var ans1 = document.querySelector('input[name="q' + currQ + '"]:checked').value
//     console.log(ans1)

//     if(ans1 == 0){
//         document.querySelector("#result").innerHTML = "select an answer"
//         console.log("no input")
//         document.getElementById("result").style.display="inline"
//     }else{
//         if(ans1 == 2){
//             console.log("correct")
//             document.querySelector("#result").innerHTML = "correct"
//             document.getElementById("result").style.color = "green"
//         }else{
//             console.log("incorrect")
//             document.querySelector("#result").innerHTML = "incorrect"
//             document.getElementById("result").style.color = "red"
//         }
//         document.getElementById("result").style.display="inline"
//     }
//     answers.push(ans1);
//     // document.querySelector("#result").innerHTML = ans1
// }

let checkAns = function(evt){
    evt.preventDefault()

    if(document.querySelectorAll('input[name="q'+currQ+'"]:checked').length === 0){
        alert("Please select an answer.")
        console.log("no input")
    }else{

    var ans = document.querySelector('input[name="q'+currQ+'"]:checked').value
    console.log(ans)

    // if(ans == 0){
    //     document.querySelector("#result").innerHTML = "please select an answer"
    //     console.log("no input")
    //     document.getElementById("result").style.display="inline"
    // }else{
        if(ans == key[currQ]){
            // document.querySelector("#result").innerHTML = "correct"
            // document.getElementById("result").style.color = "green"
        }else{
            // document.querySelector("#result").innerHTML = "incorrect"
            // document.getElementById("result").style.color = "red"
        }
        // document.getElementById("result").style.display="inline"
        answers.push(ans)
    // }
    }
}

let goNext = function(evt){
    evt.preventDefault()
    if(currQ < maxQ){
        document.getElementById("question"+currQ).style.display="none"
        currQ++
        document.getElementById("question"+currQ).style.display="inline"
    }
}

let goPrev = function(evt){
    evt.preventDefault()
    if(currQ > 0){
        document.getElementById("question"+currQ).style.display="none"
        currQ--
        document.getElementById("question"+currQ).style.display="inline"
    }
}

document.querySelector("#sub").addEventListener("click", checkAns)
document.querySelector("#next").addEventListener("click", goNext)
document.querySelector("#prev").addEventListener("click", goPrev)