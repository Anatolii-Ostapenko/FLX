function userCard(someIndex){
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = someIndex;

    let history = function(operationType, credits){
        let date = new Date();
        let operationTime = date.toLocaleString('en-GB')
        let obj = {operationtype: operationType, credits: credits, operationTime: operationTime}
        historyLogs.push(obj)
    }
    let getCardOptions = function(){
        return {
            key: key,
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: historyLogs
        };
    }
    let putCredits = function(addCredits){
        balance += addCredits;
        history('Received credits', addCredits);
    }
    let takeCredits = function(takeCredits){
        if(takeCredits <= transactionLimit && takeCredits <= balance){
            balance -= takeCredits;
            history('Withdrawal of credits', takeCredits);
        }else{
            console.error('You are not allowed to take credit. You can take credits from the card '+ 
            'if the transaction limit and balance are greater than the credits you want to take.'+
            '\nYour transaction limit is: '+transactionLimit+'.\nYour balanse is: '+balance+'.')
        }     
    }
    let setTransactionLimit = function(setLimit){
        transactionLimit = setLimit;
        history('Transaction limit change', setLimit);
    }
	let transferCredits = function(creditsTransfer, card){
        let tax = 0.005;
        let amountOfTax = creditsTransfer * tax;
        let taxAmount = creditsTransfer + amountOfTax;
        if( balance >= taxAmount && creditsTransfer <= transactionLimit){
            card.putCredits(taxAmount - amountOfTax);
            takeCredits(taxAmount)
        }else{
            console.error('You are not allowed to take credit. You can take credits from the card '+ 
            'if the transaction limit and balance are greater than the credits you want to take.'+
            '\nYour transaction limit is: '+transactionLimit+'.\nYour balanse is: '+balance+'')
        }
    }
    return {
        history: history,
        putCredits: putCredits,
        getCardOptions: getCardOptions,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    };
}

function UserAccount(name){
    this.maxNumberOfCards = 3,
    this.userName = name,
    this.cards = [],
    this.addCard = function(){
        if(this.cards.length < this.maxNumberOfCards){
            this.cards.push(userCard(this.cards.length + 1));
        }else{
            console.error('You can not have more than 3 cards');
        }
    }
    this.getCardByKey = function(index){
        return this.cards[index-1]
    }
}
