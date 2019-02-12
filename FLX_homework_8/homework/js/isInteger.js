function isInteger(arg){
    return (arg ^ 0) === arg;
}
isInteger(5.1);