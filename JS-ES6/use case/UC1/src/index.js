function calculate(a,b,c){
    operation=c;
    if(typeof a  == 'string'|| typeof b =='string' ){
        if(!isNaN(a) && isNaN(a)!=Infinity){
            a=parseInt(a);
        }
        if(!isNaN(b) && isNaN(b)!=Infinity){
            b=parseInt(b);
        }
    }
    if(typeof a =='number' && typeof b== 'number'){
        switch(operation){
            case '+': addFunc(a,b);
                    break;
            case '-': subFunc(a,b);
                    break;
            case '*': mulFunc(a,b);
                    break;
            case '/': divFunc(a,b);
                    break;
            case '%': modFunc(a,b);
                    break;
            default:console.log('Not a suitable operation');
        }
    }
    else{
        console.log('Input NaN');
    } 
}

function addFunc(a,b){
    console.log(`The sum is: ${a+b}` );
}
function subFunc(a,b){
    console.log(`The difference is: ${a-b}` );
}
function mulFunc(a,b){
    console.log(`The product is: ${a*b}` );
}
function divFunc(a,b){
    console.log(`The quotient is: ${a/b}` );
}
function modFunc(a,b){
    console.log(`The modulus is: ${a%b}` );
}