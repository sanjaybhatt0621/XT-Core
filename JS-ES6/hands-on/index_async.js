async function f() {
    let promise = new Promise((resolve , reject) => 
  {  setTimeout( () => resolve("done!") , 60)
});

let result = await promise;

console.log(result);
}
f();


async function getUsers(url)
{
    let response = await fetch(url);
    let body = await response.json();
    return body;
}
getUsers('https://jsonplaceholder.typicode.com/users').then
(res => console.log(res))

class Waiter
{
    async wait()
    {
        return await Promise.resolve(133333);
    }
}

// new Waiter().wait.then(res => console.log(res));



//////////////////


async function errorHandler()
{
    try
    {
        let result1 = await Promise.resolve('hey -1');
        console.log(result1);
        let response = await fetch('http://no-such-url');
    }
    catch(err)
    {
        console.log(err)
    }
    finally
    {
        console.log('Code completed!')
    }
}