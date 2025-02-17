let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0

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
    guestScore.textContent = 0
    homeScore.textContent = 0
}