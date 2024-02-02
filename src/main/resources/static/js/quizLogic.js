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

var answers = [0, 1, 2, 3, 4, 5]

let fn1 = function(evt){
    evt.preventDefault()
    var ans1 = document.querySelector("#q1").value
    // console.log(ans1)

    if(ans1 == 0){
        document.querySelector("#result").innerHTML = "select an answer"
        console.log("no input")
        document.getElementById("result").style.display="inline"
    }else{
        if(ans1 == 1){
            document.querySelector("#result").innerHTML = "incorrect"
            console.log("incorrect")
        }else if(ans1 == 2){
            document.querySelector("#result").innerHTML = "correct"
            console.log("correct")
        }else if(ans1 == 3){
            document.querySelector("#result").innerHTML = "incorrect"
            console.log("incorrect")
        }
        // document.querySelector("#result").computedStyleMap.display = "block"
        // document.querySelector("#result").style.display="block"
        document.getElementById("result").style.display="inline"
    }

    // document.querySelector("#result").innerHTML = ans1
}

document.querySelector("#sub").addEventListener("click", fn1)