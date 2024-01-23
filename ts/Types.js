// #Types
// -string
// let firstName: string="sam";
// firstName="sam";
// console.log(firstName);
// -number
// let number: number=10;
// console.log(number);
// -boolean
// let bool:boolean=true;
// console.log(bool);
// -arrays
// let array:number[] =[10,20,30]
// let array:string[] =["ducat","institute","noida"]
// let array:boolean[] =[true,false]
// let array:number[][] =[[10,20],[40,50]]
// let array:{}[] =[{key:"value"},{key:"value"},{key:"value"}]
// console.log(array);
// -any
// let a:any=10;
// a="sam";
// a={}
// a=[]
// let array:any[] = [{key:"value"},{key:"value"},[10,20,30]]
// console.log(array);
// -function
// parameters 
// function addition(a:number, b:number) {
//     console.log(a+b);
// }
// addition(10,50)
// return type 
// function addition(a:number, b:number):number{
//     return a+b;
// }
// let sum : number = addition(10,20);
// console.log(sum);
// -object
// let object:{
//     firstName:string, 
//     lastName:string,
//     age:number,
//     hobbies:["badminton"]
// }={
//     firstName:'sam', 
//     lastName:'Smith',
//     age:25,
//     hobbies:["badminton"] 
// }
// console.log(object);
// -optional properties
// let object:{
//     firstName:string, 
//     lastName:string,
//     age:number,
//     hobbies? : string[]
// }={
//     firstName:'sam', 
//     lastName:'Smith',
//     age:25,
//     hobbies:["badminton"] 
// }
// console.log(object);
// -null
// -undefined
// -enums
// enum Status{
//     active,inactive,nuteral=1000
// }
// console.log(Status);
// console.log(Status['1']);
// console.log(Status['inactive']);
// -bigint comes in es2020 
//  command  tsc Types.ts -w -t 2020
// -symbol
// -union
// let num:number | string | boolean | number[]=10
// num ="ducat"
// num =true
// num=[]
// console.log(num);
// -intersection
// interface College{
//     collegeName:string;
// }
// // interface Sports{
// //     sportsName:string;
// // }
// // let student:College & Sports={
// //     collegeName:"DUCAT",
// //     sportsName:"badminton"
// // }
// // console.log(student);
// -type aliases
// type sam=number | string;
// let num:sam=10;
// let num1:sam=10;
// let num2:sam=10;
// let num3:sam=10;
// let num4:sam=10;
// let num5:sam="hello";
// -interface
// interface Emplyee{
//         firstName:string, 
//         lastName:string,
//         age:number,
//         hobbies : string[]
// }
// let object : Emplyee ={
//     firstName:'john', 
//     lastName:'smith',
//     age:15,
//     hobbies :["badminton"]
// }
// -tuple tyes
// let employee:[string, string] = ["sam","smith"];
// console.log(employee);
// -type assertion
// let heading = document.getElementById("heading") as HTMLHeadingElement;
