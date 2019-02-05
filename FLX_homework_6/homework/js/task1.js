let a = parseFloat(prompt('Insert value a:', 0));
let b = parseFloat(prompt('Insert value b:', 0));
let c = parseFloat(prompt('Insert value c:', 0));
validation(a,b,c)
function validation(a,b,c){
    if( a === 0 || isNaN(a) || isNaN(b) || isNaN(c)){
        alert('Invalid input data');
    }else{
        quadraticEquation(a,b,c);
    }
}
function quadraticEquation(){
    let disc = discriminant(a,b,c);
    if(disc > 0){
        let results = twoDifferentRoots(a,b,c);
        alert('x1=' + results[0]+ ' and x2 = '+ results[1]);
    }else if(disc === 0){
        let results = rootEqual(a,b);
        alert('x = '+results);
    }else{
        alert('no solution')
    }
}
function discriminant(a,b,c){
    return Math.pow(b,2) - (4*a*c)
}
function twoDifferentRoots(a,b,c){
    let pow = Math.pow(b,2);
    let sqrt = Math.sqrt(pow - (4*a*c));
    let x1 = (-b + sqrt)/(2*a);
    let x2 = (-b - sqrt)/(2*a);
    let arrResult = [x1, x2];
    return arrResult;
}
function rootEqual(a,b){
    return -(b/(2*a))
}
