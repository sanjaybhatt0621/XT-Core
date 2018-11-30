'use strict'

var a = 10;

function print_a()
{
    console.log(a);
}

function run()
{
    var a = 100;
    print_a()
}

run();

//this binding
//Actor 1 : callee

function greet()
{
    console.log(this);
}

//Actor 2 caller : Default caller window

greet()
//or
window.greet();

function getCordinate()
{
    //console.log('x ix $(this.x0}
}
window.x = 999;
window.y = 989;


///

function getStocks(stocks)
{
    console.log(` ${this.name}`);
    console.log(stocks);
}

const stocks = ['test' , 'xxx']
const obj = 
{
    name : 'sapient'
};
getStocks.apply(obj , stocks);

////////////////////////////////

function increment()
{
    return this.count++;
}

const CounterApp = {
    count : 0
}

const inc = increment.bind(CounterApp);
for(let i=0 ; i<10; i++)
{
console.log('counter' , inc());
}





//////////////////////


// name = 'Suresh';
// const training = {
//     name : 'Sanjay',
//     teach : function()
//     {
//         console.log('teach' ,this.name);
//         let learn = function()
//         {
//             console.log('learn:' ,this.name);
//         }
//         learn();
//     }
// };
// training.teach();

/////////////////////////////////////////////



function sessionStart()
{
    function Trainer(name)
    {
        this.name = name;
        this.doTeach = function(sub)
        {
            console.log(this.name + "teaching "+ sub);
            let that = this;
            let notes = ".js=notes"
            let doLearn = function()
            {
                console.log(this.name + "learning " + sub + "with " + notes + "from" + that.name);
            }
            console.log('teaching ends');
            return doLearn
        }
    }
    function Employee(name)
{
    this.name = name;
}

const tnr = new Trainer('Sanjay')
const e1 = new Employee('E1')
const e2 = new Employee('E2')
const doLearn = tnr.doTeach('.js');
doLearn.call(e1)
const e2LearnFunc = doLearn.bind(e2)
e2LearnFunc()
e2LearnFunc();
}
sessionStart();


