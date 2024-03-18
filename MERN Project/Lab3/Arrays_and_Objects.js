//array
let n=[10,20,30,40];

//operations
//unpacking

//index - relative distance from the starting element.So, first element index is 0 and so on...
console.log(n[0]);
console.log(n[10]);
console.log(n[-1]);

console.log("Array Elements : ");
for(let index=0;index<n.length;index++){ //--> iterates based on index
    console.log(n[index]);
}

//for-of loop --> gives direct element
for(let x of n){
    console.log(x);
}

//array operations
    //insert elements
        //at start
        n.unshift(123);
        console.log(n);
        n.unshift(234,345);
        console.log(n);
        //at end
        n.push(0);
        console.log(n);
        //in between
        n.splice(2,0,222);
        console.log(n);
        
    //delete elements
        //at start
        let rem1 = n.shift();
        console.log("Removed Element : ",rem1);
        console.log(n);
        //at end
        n.pop();
        console.log(n);
        //in between
        n.splice(3,2);
        console.log(n);

    //replace elements
        n.splice(3,1,200);
        console.log(n);
        n.splice(3,2,34,45);
        console.log(n);

//objects
let person = {
    "personId" : 100,
    "name":"Pragna",
    "Phone":123456

}
console.log();
console.log(person);
console.log();

//dot notation
console.log(person.personId);
console.log(person.name);
console.log(person.Phone);

//bracket notation
console.log();
console.log(person['personId']);
console.log(person['name']);
console.log(person['Phone']);

console.log();
//access and print the keys
for(let x in person){
    console.log(x);
}

console.log();
//access and print values
for(let x in person){
    console.log(person[x]);
}

for(let x in person){
    console.log('Value of ',x, 'is ',person[x]);
}

for(let x in person){
    console.log(`Value of ${x} is ${person[x]}`);
}

let numbers = [10,23,45,90,2]

//Find Smallest Element
small = numbers[0]
for(let x of numbers){
    if(x<small){
        small=x;
    }
}
console.log("Smallest Element = ",small);

//Find Largest Element
big = numbers[0]
for(let x of numbers){
    if(x>small){
        big=x;
    }
}
console.log("Smallest Element = ",big);