/**
 * If finction os for Object template then name should be noun
 */

 function Employee()
 {
     //instance members;
     this.id =1;
     this.name = 'Sanjay';
     this.salary =100;
     this.calculateSalary = function()
     {
         return 1000 * this.salary; 
     }
 }
 let emp = new Employee();
 //how to log/get object properties
 //object access properties  
 //console.log(emp.id , emp.name , emp.calculateSalary());


 //Object augmentation : instance level
//Object rom function , literal , class can be augumented.



//Empty Object
function Employee() {}
const emp1 = new Employee;
//Augumentation : Add
emp.id =1;
emp.name= 'Sanjay';
console.log(emp);

delete emp.salary;

//Augumentation : iteration
for(var key in emp)
{
    console.log(emp);
}

console.log(emp['name'] , emp.name);

//const emp1 = new Employee();
console.log(emp1);

//or

const account = new Object();
account.id = 1;
account.name = 'Sanjay';
console.log(account.id , account.name);


console.dir(account);


//object creations using functions

function Employeee()
{
this.name= 'Sanjay';
}
const e = new Employeee();
console.log(e);
const Customer = function()
{
this.id = 1;
}
console.dir(Customer.prototype);
const Account1 = () => {

}
console.dir(Account1.prototype);