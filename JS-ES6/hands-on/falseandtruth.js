
 
/**
* Experimenting with falsy and truthy values
*/

var value;
var test;

test=null;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=0;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test="";
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=undefined;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=NaN;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
}
test=false;
if(test){
console.log('Truthy test passed!' + test);
}
else if(!test){
console.log('Truthy test fails:' +test);
} 
 
