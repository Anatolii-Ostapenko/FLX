function addOne(x){
    return x + 1;
}
function pipe(){
    let data = arguments[0]
    for(let i = 1; i < arguments.length; i++){
        let fuc = arguments[i];
        data = fuc(data);
   }
   return data
}
pipe(1, addOne, addOne);