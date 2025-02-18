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



//timer




  function clearBoard(){
    guestScore.textContent = 0
    homeScore.textContent = 0
    document.getElementById("timer").innerText = "00:00:00"
}

// function startNewGame() {
    
//     var x = setInterval(function() {

//         // Get today's date and time
//         var now = new Date().getTime();
          
//         // Find the distance between now and the count down date
//         var distance = countDownDate - now;
          
//         // Time calculations for  hours, minutes and seconds
//         //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 5 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
//         // Output the result in an element with id="demo"
//         document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds ;
          
//         // If the count down is over, write some text 
//         if (distance < 0) {
//           clearInterval(x);
//           document.getElementById("timer").innerHTML = "00:00:00";
//         }
//       }, 1000);
// }

// function startNewGame(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// document.getElementById("timer") = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector("timer");
//     startTimer(fiveMinutes, display);
// };