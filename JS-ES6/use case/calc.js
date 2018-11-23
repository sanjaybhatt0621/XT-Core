
function calculator(a,b,c)
{
    var opreation = c;
    if(typeof a == 'string'|| typeof b =='string' )
    {
                    if(!isNaN(a) && isNaN(a)!=Infinity){
                    a=parseInt(a);
                    }
                    if(!isNaN(b) && isNaN(b)!=Infinity){
                    b=parseInt(b);
                    }
    }
    
    if(typeof a =='number' && typeof b== 'number'){
        switch(opreation)
        {
            case '+' : addFunc(a,b);
            break;
            case '-' : subFunc(a,b);
            break;
            case '*' : multiFunc(a,b);
            break;
            case '/' : divideFunc(a,b);
            break;
            case '%' : modulusFunc(a,b);
            break;
            default: console.log('not a valid/supported opreation');
        }
    }
    else
    {
        console.log('Input NaN');
    }
        
}
function  addFunc(a,b)
        {
            console.log(`The sum is ${a + b}`);
        }
function  subFunc(a,b)
        {
            console.log(`The diffrence is ${a - b}`);
        }
function  multiFunc(a,b)
        {
            console.log(`The product is ${a * b}`);
        }
function  divideFunc(a,b)
        {
            console.log(`The divison is ${a * b}`);
        }        
function modulusFunc(a,b)
        {
            console.log(`The remainder is ${a % b}`);
        }
calculator(4,2,'*');