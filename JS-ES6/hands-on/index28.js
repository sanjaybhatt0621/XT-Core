//ES 5 Syntax
function Address(doorno = '1' , street = 'street' , city = 'city' , zipcode ='zipcode' , state = 'state')
{
    this.doorno = doorno;
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.street = state;
}

function Employee(id ='1' , name = '' , address = new Address())
{
    this.id =1;
    this.name = '';
    this.Address = address
}

let emp = new Employee();
console.log(emp.id , emp.name , emp.address );

let a = new Address('1' , '10thStreet', 'DEL','9919' , 'HR');
let emp2 = new Employee(4, 'test' ,a);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Order
{
    constructor(orderid = '00AA' , value = 0)
    {
        this.orderid = orderid;
        this.value = value;
    }
}

class Customer
{
    constructor(id ='1' , name = 'name' , order = new Order())
    {
        this.id = id;
        this.name = name;
        this.order = order;
    }
}
let order = new Order('Q001' , 1000.98);
let customer = new Customer(2 , 'Sanjay' , order);
console.log(customer);



/////////// IS-A Relationship /////////
function Account()
{
    this.id = 1;
    this.name = 'Sanjay';
    this.calculateInterest = function()
    {
        return 20;
    }
}

const acc1 = new Account();
acc1.id = 100;

Account.prototype.balance = 100;

Account.prototype.calculateInterest = function (p=1000 , r=10.5 , t=12)
{
    return p*r*t/100;
}

console.log()


////////////////////////////////////////////////////////////////

function  Person()
{
    console.log('Reson is called')
    this.name = 'Sanjay'
}

function Employee(name)
{
    Person.call(this,name);
    console.log('Employee is called')
}
Employee.prototype = Object.create(Person.prototype) ;
// const emp = new Employee();

const emp1 = new Employee('Sanjay');
console.log(emp1.name);

const emp6 = new Employee('Vinamram');
console.log(emp6.name);


const emp3 = new Employee('Goldy');
console.log(emp3.name);




class Account1 
{
    constructor(balance = 1)
    {
        console.log('Account constructor')
    }
}

class SavingsAccount extends Account1
{
    constructor()
    {
        
        console.log('Saving Account')
    }
}


const parent = 
{
    id:1
}

const child  = Object.create(parent);
child.name = 'Sanjay';
child.foo = 'foo';
console.log(child);

const hero = Object.create(null);
hero.name = 'Spider Name'
console.log(hero);


////////////////


const favFood = 
{
    name : 'rice',
     toString()
    {
        return this.name
    }
}

console.log(favFood.toString());

function Utility()
{

}

Utility.add = function(a,b)
{
    return a+b;
}

console.log(Utility.add(10,10));
console.log(Math.random()*100)


class Order1 
{

}

const order1 = new Order1();
console.log(order instanceof Object);



class Person1
{

}

class Employee1 extends Person1
{

}

const emp9 = new Employee1();
console.log('Employee instanceOf Object' , emp9 instanceof Object);
console.log('Employee instanceOf Order' , emp9 instanceof Order1);
console.log('Employee instanceOf Person' , emp9 instanceof Person1);
  


// const a = Object.create(null);


document.querySelector('html').onclick = function()
{
    alert('Stop Poking!')
}
const getUser = cb => 
{
}

