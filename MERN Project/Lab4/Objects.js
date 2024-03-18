//plain object --> primitive
let person={
    personId:100,
    name:"Pragna",
    phone:123456
}
//console.log(person);
//adding new property
person.city = "Vijayawada"
//console.log(person);

//deleting property
delete person.phone;
//console.log(person);

//updating property
person.name="Kiran";
//console.log(person);

//complex object --> primitive + non-primitive combined value
let student = {
    rollNo:100,
    name:"Sneha Latha",
    marks:[90,98,99],
    address:{
        city:"Hyderabad",
        pincode:555333
    }
    ,
    getAverage:function(){
        console.log(this.marks);
    }
}

//console.log(student);

//student.getAverage();

//Create employee object with properties empId, name, basic, address and getSalary
let employee = {
    empId:23,
    name:"Ravinder",
    basic:2000,
    address:{
        city:"Banglore",
        pincode:456546
    },
    getSalary:function(){
        let hra = (0.15) * this.basic;
        let da = (0.1) * this.basic;
        //console.log(da);
        //console.log(this.basic+hra+da);
    }
}

//console.log(employee);
//employee.getSalary();

//array of objects
let names = ['ravi','kiran']
let enos = [100,200,300]

let emps = [
    {eno: 100, name:"Pragna",basic:3000,},
    {eno: 200, name:"Pranav",basic:13043,},
    {eno: 300, name:"Pranati",basic:33500,}
];

//Find employee with least salary
less = emps[0].basic;
for(let x of emps){
    if(x.basic<less){
        less=x.basic;
    }
}

console.log("Employee with Least Salary = ",less);

//Find employee with highest salary
more = emps[0].basic;
for(let x of emps){
    if(x.basic>more){
        more=x.basic;
    }
}

console.log("Employee with Highest Salary = ",more);

//Give 10% hike for each employee
for(let x of emps){
    x.basic = x.basic + ((0.1) * x.basic);
}

console.log("After 10% Hike, the salaries are : ");
console.log(emps);

