let a = 10;
a+20;

console.log(a);

a=a+20;
console.log(a);

//primitives --> immutable ------- number, boolean, string, null, undefined
//non-primitives --> mutable ----- object, array etc

//stack memory allocation - for primitives
//heap memory allocation - for objects.

let person = {
    eid:100,
    name:"Praveen"
}

//create copy
let test=person;

person.eid=300; //change is being made after creating the copy
console.log(person);
console.log(test);
console.log();
//Still change is reflected in both the original and copy (shallow copy?)

let tests = {...person}; //... --> spread operator - used to make copies for non-primitives (deep copy?)
person.eid=500;
console.log(person);
console.log(tests);

console.log();
let testss = {...person,city:"Hyderabad"}; //... --> spread operator - used to make copies for non-primitives (deep copy?)
person.eid=800;
console.log(person);
console.log(testss);




