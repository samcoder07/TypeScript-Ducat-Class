//array
let array: Array<number>=[10,20,30,40];
let array1: Array<string>=["sam"];

//function
function addition<T,U>(num1: T,num2:U) {
    console.log(num1,typeof num1);
    console.log(num2,typeof num2);
}

addition<number,number>(10,20)
addition<string,string>("sam","saluja");

// using class 

class Employee<T>{
    firstName:T;
    lastName:T;

    constructor(fname:T,lname:T){
        this.firstName=fname;
        this.lastName=lname;
    }
}

let emp=new Employee<string>("sam","salua");
console.log(emp);


