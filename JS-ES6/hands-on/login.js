'use strict'
//Object Destructing


function getEmployee(employee)
{
    console.log(`Id  ${employee.id}`)
    console.log(`Name ${employee.name}`)
    console.log(`Salary ${employee.salary}`)
}

getEmployee({
id:1,
name:'Sanjay',
salary:'100'
});


// const getStocks = () => (
  
//     { id:1,
//         value:100,
//         symbol:"NSF"
//     });

    //Case : 2
    // const getStocks = () =>{
    //     return{
    //     id:1,
    //     value:100,
    //     symbol:"NSF"
    //     };
    //     } 

// const getStocks = (id, value , symbol) => (
//     {
//         id : id,
//         value: value,
//         symbol: symbol
//     }
// );
// console.log(getStocks(3,900,"DSF"));

//way -2


const getStocks = (id =1 , value = 0.0 , symbol = "DFD") => (
    {
        id,
        value,
        symbol
    }
);
console.log(getStocks(3,900,"DSF"));



const getCustomers = ({id , address : {city}}) => 
{
    // console.log(id , address.city);
    console.log(id , city);
};

const customer  = {
    id : 1 ,
    address : {
        city : "Delhi" ,
        state: "HR"
    }
};

// const getUser = (resolve , reject) => 
// {
//     let mockUser =
//     {
//         name: 'Sapient',
//         password : 'admin'
//     }

// if(mockUser)
// {
//     resolve(mockUser);
// }
// else
// {
//     reject(
//         {
//             err: 'Something went wrong'
//         }
//     )
// }

// };

// const login = user => 
// {
//     console.log('Login');
// }
// const handler = user => 
// {
//     console.log(user);
// }

// const successHandler = user =>
// {
//     login(user);

// }


// const failuerHandler = err => 
// {
//     console.log(err);
// }

// getUser(successHandler , failuerHandler);

// const getUser = (resolve , reject) => 
// {
//     let mockUser =
//     {
//         name: 'Sapient',
//         password : 'admin'
//     }

// if(mockUser)
// {
//     resolve(mockUser);
// }
// else
// {
//     reject(
//         {
//             err: 'Something went wrong'
//         }
//     )
// }

// };

// const login(user,resolve,reject)= user => 
// {
//     if(user.name == 'Sapient' && user.password == 'Sapient')
//     resolve(user);
//     else
//     reject(
//         {
//             err:"Login failed";
//         }
//     )
// }
// const handler = user => 
// {
//     console.log(user);
// }

// const successHandler = user =>
// {
//     login(user );

// }


// const failuerHandler = err => 
// {
//     console.log(err);
// }

// const successLoginHandler
// getUser(successHandler , failuerHandler);


// function reqListener()
// {
//     console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load" , reqListener);
// oReq.open("GET" , "http://www.example.org/example.txt");
// oReq.send();

// class Http
// {
//     private String url;

//     public Response get()
//     {

//     }
// }

//  

let urls = 
[
    'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url =>
    fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .catch(logError)
    ))
    .then(data =>
        {
            console.log(data)
        })

        var response = Response.;
  function checkStatus()      