class Profile{
    constructor(name, id,city){
        this.name = name;
        this.id = id;
        this.city = city;
    }
}

class ProfileService{
    constructor(){
        this.url='http://localhost:3000/profile';

    }
    async save(name,city){
        try{
            const id= Math.floor(Math.random() * 100);
            const profile=new Profile(name,id,city);
            const response = await fetch(this.url,{
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile) // body data type must match "Content-Type" header
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
    async findAll(){
        try{
            const res = await fetch(this.url);
            return  res.json();
        }catch(err){
            console.log(err);
        }

    }
    async findById(id){
        try{
            const response=await fetch(`${this.url}?id=${id}`);
            return response.json();
        }catch(err){
            console.log(err);
        }
    }

    async update(id){
        try{
            const toUpdate= new Profile(id,name,city);
            const response=await fetch(`${this.url}/${id}`,{
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(toUpdate)
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
    async remove(id){
        try{
            const response=await fetch(`${this.url}/${id}`,{
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
}

class ProfileComponent{
    constructor(profileService){
        this.profileService=profileService; 
    }
    add(name, city){
        this.profileService.save(name,city).then((result)=>console.log(result));
    }
    findAll(){
        this.profileService.findAll().then((result)=>console.log(result));
    }
    findById(id){
        this.profileService.findById(id).then((result)=>console.log(result));
    }
    update(id,name,city){
        this.profileService.update(id,name,city).then((result)=>console.log(result));
    }
    remove(id){
        this.profileService.remove(id).then((result)=>console.log(result));
    }
}
const profileComponent= new ProfileComponent(new ProfileService());