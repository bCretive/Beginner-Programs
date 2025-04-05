let userScore = document.querySelector('#userScore')
let compScore = document.querySelector('#compScore')
let choices = document.querySelectorAll('.choice')
let remark = document.querySelector('#remark')

const genCompChoice = () => {
  let compChoices = ['Rock', 'Paper', 'Scissors']
  let choiceIdx = Math.floor(Math.random() * 3)
  return compChoices[choiceIdx]
}

const gamePlay = () => {
  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      let userChoice = choice.textContent
      let compChoice = genCompChoice()
      
      if (userChoice !== compChoice){
        if ((userChoice == 'Rock' && compChoice == 'Paper') || (userChoice == 'Paper' && compChoice == 'Scissors') || (userChoice == 'Scissors' && compChoice == 'Rock')) {
          remark.style.backgroundColor = 'red'
          remark.style.color = 'black'
          remark.innerText = `U lose. Comp's ${compChoice} beats your ${userChoice}`
          compScore.textContent++
        }
        else{
          remark.style.backgroundColor = 'lightGreen'
          remark.style.color = 'black'
          remark.textContent = `U won. Your ${userChoice} beats ${compChoice}`
          userScore.textContent++
        }
      }
      else{
          remark.style.backgroundColor = 'black'
          remark.style.color = 'white'
          remark.textContent = "It's a draw"
      }
    })
  })
}
gamePlay()