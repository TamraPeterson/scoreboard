let scoreboardOne = 0
let scoreboardTwo = 0



function increaseScore(team) {
  console.log(team);
  if (team == "team1") {
    scoreboardOne++
    let score1Element = document.getElementById("team1score")
    score1Element.innerText = scoreboardOne
  }
  else {
    scoreboardTwo++
    let score2Element = document.getElementById("team2score")
    score2Element.innerText = scoreboardTwo
  }

}
function resetScore() {
  scoreboardOne = 0
  scoreboardTwo = 0
  document.getElementById('team1score').innerText = 0
  document.getElementById('team2score').innerText = 0


}

function timesTwo(team) {
  if (team == 'team1') {
    scoreboardOne += 2
    document.getElementById('team1score').innerText = scoreboardOne
  }
  else {
    scoreboardTwo += 2
    document.getElementById('team2score').innerText = scoreboardTwo
  }
}

function losePoint(team) {
  if (team == 'team1') {
    scoreboardOne--
    document.getElementById('team1score').innerText = scoreboardOne
  }
  else {
    scoreboardTwo--
    document.getElementById('team2score').innerText = scoreboardTwo
  }
}

function addTeam() {

}