
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

function resultmsg(userChoice,computerChoice){
    if(userChoice === 'Bat'){
        if(computerChoice === 'Ball'){
            return '==>>>😊You have won';
        }else if(computerChoice === 'Bat'){
            return `===>It's a tie`;
        }else{
            return `==>>>😔Computer has won`;
        }
    }

    else if(userChoice === 'Ball'){
        if(computerChoice === 'Bat'){
            return `😔Computer won the cricket`;
        }else if (computerChoice === 'Ball'){
            return `It's a tie Match`;
        }else {
            return `😊You won the match`;
        }
    }

    else if(userChoice === 'Stump'){
        if(computerChoice === 'Bat'){
            return `😔Computer won the match`;
        }else if (computerChoice === 'Ball'){
            return `😊You won the match`;
        }else{
            return `It's a tie`;
        }
    }
}
let z = resultmsg();
console.log(z);