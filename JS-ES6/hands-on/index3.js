'use strict'

/**
 * function can be passed as parameter , can be stored in a variable that variable point function , can be executed later.
 * 
*
*/
function greeter(greet)
{
    greet('Sanjay');
}

const hi = function()
{
    console.log('Hi')
};
greeter(hi);

///
greeter(function (name) 
{
    console.log('Hello' , name)
});

///
const mygreeter = grret => greet('Sanjay');

mygreeter(name => console.log(name));
const hi = name => console.log('Hi' , name);
mygreeter(hi);
//////////////////////////////////////////////////////////////////////////
const getUser = cb => cb ({
    user : 'Sanjay Bhatt'
});
const handler = user => {
    console.log(user);
}
getUser()