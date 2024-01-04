
let scoreStr = localStorage.getItem('score');

resetScore(scoreStr);

function resetScore(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    tie : 0,
    loss : 0, 
    };

// if(scoreStr !== undefined){
//     score = JSON.parse(scoreStr);
// } else{
//    score ={
//     win : 0,
//     tie : 0,
//     loss : 0, 
//     };
// }
  score.displayScore =  function displayScore() {
    return `No. of matches : Won: ${score.win}, Tie: ${score.tie}, Loss ${score.loss}`
 }
 showAll();
}

function ComputerChoice(){
    
    let randomNumber = Math.random() * 3;
     
    if(randomNumber > 0  &&  randomNumber <=1 ){
        return 'Bat';
           // console.log('Computer choice is Bat');
       }else if(randomNumber > 1 && randomNumber <=2){
        return 'Ball';
           // console.log('Computer choice is Ball');
       }else{
        return 'Stump';
           // console.log('Computer choice is Stump');
       }
       
}
// function to show result
function resultmsg(userChoice,computerChoice){
    
     if(userChoice === 'Bat'){
        if(computerChoice === 'Ball'){
            score.win++;
            return '==>>>😊You have won';
        }else if(computerChoice === 'Bat'){
            score.tie++;
            return `===>It's a tie`;
        }else{
            score.loss++;
            return `==>>>😔Computer has won`;
        }
     }

     else if(userChoice === 'Ball'){
        if(computerChoice === 'Bat'){
            score.loss++;
            return `😔Computer won the cricket`;
        }else if (computerChoice === 'Ball'){
            score.tie++;
            return `It's a tie Match`;
        }else {
            score.win++;
            return `😊You won the match`;
        }
     }

     else if(userChoice === 'Stump'){
        if(computerChoice === 'Bat'){
            score.loss++;
            return `😔Computer won the match`;
        }else if (computerChoice === 'Ball'){
            score.win++;
            return `😊You won the match`;
        }else{
            score.tie++;
            return `It's a tie`;
        }
     }
}

function showAll(userChoice,computerChoice,resultMsg){
   
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('#User_move').innerText = 
    userChoice !== undefined ? `You have choosen ${userChoice}` : '';

    document.querySelector('#Computer_move').innerText = 
    computerChoice !== undefined ?` Computer has choosen ${computerChoice}` : '';

    document.querySelector('#result').innerText= 
    resultMsg !== undefined ? `result:${resultMsg}` : '';

    document.querySelector('#Score').innerText =
    score.displayScore() !== undefined ?  `${score.displayScore()}` : '';
    // alert(`You have choosen ${userChoice} \n Computer has choosen ${computerChoice} \n ${resultMsg} \n ${score.displayScore()}`);
}

