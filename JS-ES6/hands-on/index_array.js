const list = new Array(1,2,3,4);
console.log(list);

const names = ['Sanjay' , 'b' , 'c']
console.log(names);
names.forEach(function (item, index)
{
    console.log(item);
})

const video = 
{
    genre : "Sc fi" ,
    list : ['a' , 'b' , 'c'],
    findMovies()
    {
        var self = this;
        this.list.forEach(function (movie , index)
        {
           
            console.log(self.genre , movie) //arrow function
        })
    }
};

video.findMovies()