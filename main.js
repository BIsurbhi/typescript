// Variable declaration
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isBeginner = true;
var total = 0;
var sname = 'Vishwas';
var sentence = "My Name is ".concat(sname);
console.log(sentence);
//result - My Name is Vishwas
// Array defining
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
var person = ['surbhi', 24, true];
console.log(list1);
console.log(list2);
console.log(person);
/* result - [1,2,3]
            [4,5,6]
            ["surbhi", 24, true]
*/
// enum 
var myConstant;
(function (myConstant) {
    myConstant[myConstant["pi"] = 3.14] = "pi";
    myConstant[myConstant["e"] = 2.73] = "e";
    myConstant[myConstant["log2"] = 0.3] = "log2";
    myConstant[myConstant["log5"] = 0.7] = "log5";
})(myConstant || (myConstant = {}));
var r = 10;
console.log(2 * myConstant.pi * r);
// result - 62.8000000000004
//any 
var randomValue = 10;
randomValue = true;
randomValue = 'surbhi';
console.log(randomValue);
//Note - we can use unknown instead of any 
// some conditions 
var a;
a = 10;
a = true;
//it not create any error but  if 
// so it create error we can't reassign the value 
var multiType;
multiType = 20;
multiType = true;
//  OR 
var anyType;
anyType = 20;
anyType = true;
anyType = 'suru';
//Functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
// result - 15
// OR 
function addNums(num1, num2) {
    if (typeof num1 == "string") {
        if (isNaN(parseInt(num1, 10))) {
        }
    }
    return num1 + num2;
}
console.log(addNums('10', 20));
// result - 1020
// for making perameter optional use ? , optional parameter that always be after required perameter
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add1(5));
//result - 5
// OR 
function areaOfsquare(side, isInteger) {
    if (isInteger) {
        return Math.floor(side * side);
    }
    return 0;
}
console.log(areaOfsquare(5.25, true));
// result - 27
//  default perameter
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add3(5));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'surbhi',
    lastName: 'singh'
};
fullName(p);
// class 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Evening ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('surbhi');
console.log(emp1.employeeName);
emp1.greet();
/* result -  surbhi
             Good Evening surbhi */
// Note- with the extends manager use properties of Employee
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegate Tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('swapnil');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
/* result :-  Manager delegate Tasks
               Good Evening swapnil
               swapnil */ 
