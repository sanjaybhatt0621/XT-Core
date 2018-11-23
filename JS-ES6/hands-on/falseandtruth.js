
 
/**
* Experimenting with falsy and truthy values
*/

var greetings = "wel";
var message = greetings && "hell";
console.log(message);

var value;
var test;

test=null;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=0;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test="";
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=undefined;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=NaN;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=false;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
} 


//////////////// Ternary Oprerator

var age = 19;
var eligibility = age >= 18 ? "adult" : "minor";
console.log(eligibility);

var counter = 0;
var score = counter ? "You won" : "You lost";
console.log(score);

//typeOf variable  typeof(variable)
var num = 1;
var str = "hello";
var bool = true;
var un;
var nanres = 100 * un;
var infRes = 100/0;
var fn = function hello(){};
var obj = {id : 1};
var nullres = null;




console.log(`The type of num is ${typeof num}`);
console.log(`The type of str is ${typeof str}`);
console.log(`The Type of bool is ${typeof bool}`);


/////////////////////


var actionType = "add";

switch(actionType)
{
    case "add":
    console.log("add is called");
    break;
    case "multiply":
    console.log("multiply is called");
    break;
    default:
    console.log("No match found");
}


/////

var step;
for(step = 0; step < 5; step++)
{
    console.log(`Walking step by step ${step}`);
} 

//function

function myFunc()
{
    console.log(`Hello World`);
}
myFunc();

//a,b is arg
function add(a,b)
{
    const result1 = a+b;
    console.log(result1);
}
add(10,10);
add(); //Undefiened + Undefiened = NaN

function substract(a,b)
{
    return a - b;
}
const result = substract(10,1);
console.log(result);

function isValid()
{
    return;
}
const status = isValid() ? "Valid" : "NotValid";
console.log(status);
function login(userName , password)
{
    if(userName === 'admin' && password === 'admin')
    {
        return true;
    }
    return;
}

const isLoggedIn = login('admin' , 'admin') ? 'OK' : 'NotOk';
console.log(isLoggedIn);


//Rest Opreator
function log(...args)
{
    console.log();
}
log('hello');
log('hai','welcome','greet','test','how are you')

function doWeblog(page , ...args)
{
console.log(page,args);
}
doWeblog('productPage' , 13 , 'Test' , 90);
doWeblog('loginPage' , 'admin' , 'admin');