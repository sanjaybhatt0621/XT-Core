
const urlList = [
    'https://api.github.com/users/rajeevjain1983'
    , 'https://api.github.com/users/akanksha-211'
    , 'https://api.github.com/users/CodeWithAnkitSinghal'
    , 'https://api.github.com/users/adishmodi'
    , 'https://api.github.com/users/goldy28'
    , 'https://api.github.com/users/vinamrasingh'
    , 'https://api.github.com/users/rohit-khanna'
    , 'https://api.github.com/users/sanjaybhatt0621'
    , 'HTTPS://api.github.com/users/JugalJoshi8'
    , 'https://api.github.com/users/rohngonnarock'
    , 'https://api.github.com/users/vivek-khokhar'
    , 'https://api.github.com/users/SidVedi'
    , 'https://api.github.com/users/ajayp944'
    , 'https://api.github.com/users/rao7'
]

function  getUserNames() {
    Promise.all(urlList.map(url  =>  
        {
            return  fetch(url);
        }
    )).then( result  => {
         result.forEach(userDetails  => userDetails.json()
        .then(detail  => 
            { 
                console.log(detail.name  ||  detail.login) 
            })
        )
    });
}
getUserNames();