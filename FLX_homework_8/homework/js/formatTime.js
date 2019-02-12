function convertToInteget(number){
    let tmp = '';
    let toString = ""+ number; 
    for(let i = 0; i < toString.length; i++){
        if(toString[i] !== '.'){
            tmp += toString[i];
        }else{
            break
        }
    }
    return 1*tmp;
}
function formatTime(number){
    let deys = convertToInteget(number / 1440);
    let minutesLeft = number - (1440 * deys) 
    let hours = convertToInteget(minutesLeft/60);
    let minutes = minutesLeft - (60 * hours);
    return ""+deys+" day(s) "+hours+" hour(s) "+minutes+" minute(s)."
}
formatTime(3601)