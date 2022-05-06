 // Variable declaration

 let isBeginner : boolean = true;
 let total : number = 0;
 let sname : string = 'Vishwas';

let sentence : string = `My Name is ${sname}`;
console.log(sentence)
 //result - My Name is Vishwas

// Array defining

let list1 : number[] = [1,2,3]
let list2 : Array<number> = [4,5,6]
let person : any[] = ['surbhi' , 24, true]

console.log(list1)
console.log(list2)
console.log(person)

/* result - [1,2,3] 
            [4,5,6]
            ["surbhi", 24, true]
*/


// enum 

enum myConstant {
  pi = 3.14,
  e = 2.73,
  log2 = 0.3,
  log5 = 0.7
}
var r : number = 10
 console.log(2*myConstant.pi*r)
 // result - 62.8000000000004


 //any 

 let randomValue : any = 10;
    randomValue = true;
    randomValue ='surbhi'

    console.log(randomValue)

    //Note - we can use unknown instead of any 

    // some conditions 

    let a;
    a=10;
    a = true;

    //it not create any error but  if 
     
     // so it create error we can't reassign the value 

     let  multiType : number | boolean;
     multiType = 20;
     multiType = true;

     //  OR 

     let anyType : any
     anyType = 20;
     anyType = true;
     anyType = 'suru'

      //Functions

      function add(num1 : number, num2:number) : number {
        return num1 + num2;
      }
      console.log(add(5,10))
      // result - 15
      // OR 

      function addNums(num1 : any, num2: number): number {
        if(typeof num1 == "string") {
          if(isNaN(parseInt(num1,10))){
              
          }
        }
        return num1 + num2;
      }
      console.log(addNums('10',20))
      // result - 1020


      // for making perameter optional use ? , optional parameter that always be after required perameter

      function add1(num1 : number, num2 ? :number) : number {
        if (num2)
        return num1 + num2;
        else 
        return num1;
      }
      console.log(add1(5))
      //result - 5

      // OR 

      function areaOfsquare(side:number,isInteger?:boolean):number {
        if(isInteger){
          return Math.floor(side*side);
        }
        return 0
      }
      console.log(areaOfsquare(5.25,true))
      // result - 27
    
    //  default perameter

       function add3(num1 : number, num2 :number = 10) : number {
        if (num2)
        return num1 + num2;
        else 
        return num1;
      }
      console.log(add3(5))


     // Interface 

     interface Person {
       firstName : string;
       lastName : string;
     }
     function fullName(person: Person) {
       console.log(`${person.firstName} ${person.lastName}`)
     }
     let p = {
       firstName:'surbhi',
       lastName: 'singh'
     };
   fullName(p)

   // class 

   class Employee {
     employeeName : string;

     constructor(name: string) {
       this.employeeName = name ;
     }
     greet() {
       console.log(`Good Evening ${this.employeeName}`)
     }
   }

   let emp1 = new Employee('surbhi')
   console.log(emp1.employeeName);
   emp1.greet()
/* result -  surbhi
             Good Evening surbhi */

// Note- with the extends manager use properties of Employee

   class Manager extends Employee {
     constructor(managerName: string) {
          super(managerName)
     }
     delegateWork() {
       console.log(`Manager delegate Tasks`)
     }
   }
   let m1 =  new Manager('swapnil')
   m1.delegateWork();
   m1.greet();
   console.log(m1.employeeName);
   /* result :-  Manager delegate Tasks 
                  Good Evening swapnil
                  swapnil */