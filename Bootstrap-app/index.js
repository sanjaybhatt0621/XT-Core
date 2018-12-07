// document.querySelector('#firstName').addEventListener
// ('input' , function()
// {
//     console.log('firstname');
// });

// document.querySelector('#lastName').addEventListener('input' , function()
// {
//     console.log('lastName');
// });

function init(){
    var ageGroup,firstname,lastName,gender,sports;
    sports=[];
    document.querySelector('#firstName').addEventListener('input',function(e){
    console.log('firstname');
    firstname = e.target.value;
    });
    document.querySelector('#lastName').addEventListener('input',function(e){
    console.log('lastName');
    lastName =e.target.value;
    });
    document.querySelector('#ageGroup').addEventListener('change',function(e){
    ageGroup=e.target.value;
    console.log(e.target.value);
    });
    document.querySelectorAll('input[type=checkbox]').forEach(function(check){
    check.addEventListener('change',function(){
    if(!this.checked){
    if(sports.includes(this.value)){
    sports.splice(sports.indexOf(this.value),1);
    }
    console.log(sports);
    }else{
    if(!sports.includes(this.value)){
    sports.push(this.value);
    }
    console.log(sports);
    }
    });
    });
    document.querySelectorAll('input[type=radio]').forEach(function(radio){
    radio.addEventListener('click',function(){
    if(this.checked){
    gender=this.value;
    } 
    console.log(gender);
    });
    });
    document.querySelector('#btn').addEventListener('click',function(e){
    console.log(e.target.value);
    document.querySelector('#sentence').innerHTML=firstname + ' '+ lastName+' who is a '+gender+
    ' and is of the age group '+ageGroup+' is interested in sports '+ sports; //e.target.value;
    });
    }
    window.onload=init; 
     
    