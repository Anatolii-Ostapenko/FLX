let playGame = confirm("Do you want to play a game?");
let maxWinnings = 10;
let maxNumber = 5; 
let totalPrize = 0;
let playOrNotPlay;
if(playGame){
    while(playGame){
        let maxWinOnAttemt = 10;
        let attempted = 3;
        while(attempted > 0){
            let randomNumber = Math.floor(Math.random() * maxNumber);
            let enterNumber = parseFloat(prompt('Enter a number from 0 to ' + maxNumber +
            '\nAttempts left: ' + attempted +
            '\nTotal prize: ' + totalPrize +
            '\nPossible prize on current attempt: '+ maxWinOnAttemt+'', ''));
            if(isNaN(enterNumber)){
                break;
            }else if(enterNumber === randomNumber){
                totalPrize += maxWinOnAttemt;
                playOrNotPlay = confirm(`Congratulation!  Your prize is: ${totalPrize}$ Do you want to continue?`);
                if(playOrNotPlay){
                    maxWinnings = maxWinnings * 3;
                    maxNumber = maxNumber + 5;
                    attempted = 3;
                    maxWinOnAttemt = maxWinnings;
                }else{
                    break;
                }
            }else{
                attempted --;
                maxWinOnAttemt = Math.floor((maxWinOnAttemt / 2)).toFixed() * 1;
            }
        }
        alert('Thank you for a game. Your prize is: '+totalPrize+' $');
        playGame = confirm("Do you want to play a game?");
    }
}else{
    alert("You did not become a millionaire, but can.");
}



 