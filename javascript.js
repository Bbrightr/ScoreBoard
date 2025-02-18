let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime()

//Home Scores
function add1PointH(){
    hScore += 1
    console.log(hScore)
    homeScore.textContent = hScore
}

function add2PointH(){
    hScore += 2
    console.log(hScore)
    homeScore.textContent = hScore
}

function add3PointH(){
    hScore += 3
    console.log(hScore)
    homeScore.textContent = hScore
}

//Guest Scores
function add1PointG(){
    gScore += 1
    console.log(gScore)
    guestScore.textContent = gScore
}

function add2PointG(){
    gScore += 2
    console.log(gScore)
    guestScore.textContent = gScore
}

function add3PointG(){
    gScore += 3
    console.log(gScore)
    guestScore.textContent = gScore
}

function clearBoard(){
    gScore = 0
    guestScore.innerHTML = 0
    // console.log()
    hScore = 0
    homeScore.textContent = 0
    
    let timerEl = document.getElementById("stopTimer")
    timerEl.textContent = "00:00:00"
}

//timer






// var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

//     var x = setInterval(function()
//     { var now = new Date().getTime();
          
//         // Find the distance between now and the count down date
//         var distance = countDownDate - now;
          
//         // Time calculations for  hours, minutes and seconds
//         //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 5 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
//         // Output the result in an element with id="stopTimer"
//         document.getElementById("stopTimer").innerHTML = hours + " : " + minutes + " : " + seconds ;
              
//             // If the count down is over, write some text 
//             if (distance < 0) {
//               clearInterval(x);
//               document.getElementById("stopTimer").innerHTML = "00:00:00";
//             }
//       }, 1000);
    
// function startNewGame() {
//         document.getElementById("stopTimer").innerHTML = hours + " : " + minutes + " : " + seconds ;
// }


// function startNewGame(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
// }

document.getElementById("stopTimer") = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector("stopTimer");
    startTimer(fiveMinutes, display);
};

