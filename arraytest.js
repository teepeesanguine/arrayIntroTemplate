console.log("it here.")

let clickyButton = document.querySelector(`#resultButton`)
let theAnswer = document.querySelector(`#resultsHere`)

var collegeList = ["Michigan State",
"Marquette University",
"University of Wisconsin Madison",
"Northwestern University"]

clickyButton.addEventListener("click", e=>{
  let schoolSelect = getRandomNumber(4)
  theAnswer.innerHTML = `<h6>You should attend ${collegeList[schoolSelect]}.`
})

function getRandomNumber(maxNum){
    //this function gives a random number between 1 and 5
    return Math.floor(Math.random()*maxNum)
}
