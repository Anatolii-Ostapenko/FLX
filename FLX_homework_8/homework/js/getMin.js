function getMin(){
    for (let i = 0; i < arguments.length - 1; i++){ 
        for (let j = i+1; j < arguments.length; j++){ 
            if (arguments[j] < arguments[i]){ 
                let tmp = arguments[j]; 
                arguments[j] = arguments[i]; 
                arguments[i] = tmp; 
            }
        }
    } 
    let min = arguments;
    return min[0]
}
getMin(3,0,-3);