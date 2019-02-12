function reverseNumber(arg){
    let toString = "" + arg;
    let length = toString.length;
    let reverse = '';
    if(toString[0] === '-'){
        reverse = '-'
    }
    for(let i = 0 ;i < length; i++){
        if(toString[(length-1) - i] === '-'){
            break;
        }
        reverse += toString[(length-1) - i];
    }
    return 1 * reverse;
}
reverseNumber(-456);