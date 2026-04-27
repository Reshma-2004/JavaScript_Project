const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guess')
const result=document.querySelector('.result')
const prevGuess=document.querySelector('.prevGuess')
const remainingGuess=document.querySelector('.remainingGuess')
 const display=document.querySelector('.display')

let num=Math.round(Math.random()*100)+1
// console.log(num);

let prevArray=[]
let moves=10

let playGame=true
displayGuess()
if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
    const  inputValue= parseInt( userInput.value)
    console.log(inputValue);
    isValidate(inputValue)   
    })
}

function isValidate(inputValue) {
    if(isNaN(inputValue)){
        displayMessage('Invalid guess retry',"red")
    }
    else if(inputValue>100||inputValue<=0){
        displayMessage(`Invalid guess retry number between 1 to 100`,"red")
    }else{
        moves--;
        prevArray.push(inputValue)
        if(moves==0){
            displayGuess()
            displayMessage(`Game Over !!!Retry`,'red')
            endGame()
        }
        else{
            displayGuess()
            checkGuess(inputValue)
        }
    }
    

    
}
function checkGuess(inputValue) {
    if(inputValue===num){
        displayMessage(`Your Guess:  ${inputValue} is correct .You WON!!! `,"orange")
        endGame()
    }
    else  if(inputValue>num){
        displayMessage(`Hint:Lesser than ${inputValue}`,"orange")
    } else  if(inputValue<num){
        displayMessage(`Hint:Greater than ${inputValue}`,"orange")
    }
    
    
}
function displayMessage(msg,colorOf){
    result.innerHTML=msg
    result.style.color=colorOf

}

function displayGuess() {
    userInput.value=''
    prevGuess.innerHTML=`[${prevArray}]`
    remainingGuess.innerHTML=`${moves}`

    
}

function newGame(btn) {
    // const btn=document.querySelector('#newBtn')
    console.log(btn);
    
    btn.addEventListener('click',function(e){
        playGame=true
        let num=Math.round(Math.random()*100)+1
        prevArray=[]
        moves=10
        result.innerHTML=''
        userInput.removeAttribute('disabled')
        displayGuess()


    })
    
    
}

function endGame() {
     userInput.value=''
     userInput.setAttribute('disabled','')
     playGame=false
    const newButton=document.createElement('button')
   newButton.id="newBtn"
    newButton.innerHTML="New Game"
    display.appendChild(newButton)
    const btn=document.querySelector('#newBtn')
  
    
    newGame(btn)

     
    

}
