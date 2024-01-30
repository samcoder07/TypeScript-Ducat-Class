// // // super calls 
// // class ParentClass{
// //     className:string;
// //     constructor(name:string) {
// //         this.className=name;
// //     }
// // }

// // class ChildClass extends ParentClass{
// //     childName:string;
// //     constructor(name:string,cName:string){
// //         super(name);
// //         this.childName=cName;
// //     }
// // }

// // let child=new ChildClass("ParentClass","childClass");
// // console.log(child);

// // overriding method 
// class ParentClass{
//     testing():void{
//         console.log("parent testing function");
        
//     }
// }

// class ChildClass extends ParentClass{
//     testing():void{
//         super.testing();
//         console.log("child testing function");   
//     }
// }

// let child=new ChildClass();
// child.testing();


// // static member 

// class Employee{
//     static counter:number =0;

//     constructor(){
//         Employee.counter++;
//     }

//     static getCounter(){
//         return Employee.counter;
//     }
// }

// let emp1=new Employee();
// let emp2=new Employee();
// let emp3=new Employee();

// console.log(emp1,emp2,emp3);
// console.log(Employee.counter);
// console.log(Employee.getCounter());


// // abstract class and members 

// abstract class Car{
//     abstract engine (para1: string,para2:string):void;

//     hasfourwheel(){
//         return true
//     }
// }

// class Alto extends Car{
//     engine(para1: string, para2: string): void {
//         console.log(para1,para2);
//     }
//     wheelSize(){
//         return "13inch"
//     }
// }

// let car:Alto= new Alto();
// console.log(car);
// car.engine("car1","engine1");
// console.log(car.hasfourwheel());
// console.log(car.wheelSize());

// // how to buypass abstract class 

// abstract class GrandParent{
//     abstract houseName();
// }

// abstract class ParentClass extends GrandParent{
//     abstract houseName();
// }

// class ChildClass extends ParentClass{
//     houseName(){
//         console.log("child house name");        
//     }
// }

// // interface implement 

// interface Car{
//     a:number;
//     engine (para1:string,para2:string):void;
// }

// class Alto implements car{
//     a=10;
//     engine (para1:string,para2:string):void{
//         console.log(para1,para2);
        
//     }
// }

// let car=new Alto()
// car.engine("0.8L","13hp");
