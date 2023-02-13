
let homeCount = 0
let awayCount = 0

homeScore = document.getElementById("hscore-el")

awayScore = document.getElementById("ascore-el")


function increment(side, num) {

    if (side ===  'home') {
        homeCount += num
        homeScore.textContent = homeCount
    }
    
    else {
        awayCount += num
        awayScore.textContent = awayCount
    }
}