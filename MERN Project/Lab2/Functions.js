console.log(findSum(45,20)); //calling function declaration before it is declared
// Doesn't throw an error

//function declaration
function findSum(a,b){
    return a+b;
}

//console.log(findSum1(12,23)); //calling function expression before it is declared
//Throws as error

//function expression - storing data into variable
let findSum1 = function(a,b){
    return a+b;
}//nameless or anonymous function

//So, Function expression is better than function declaration because it enables the function calling only after it is declared as per protocol

//arrow function - useful when there is only a single line of code in the body.
let findSum2 = (a,b)=>a+b; //Flower brackets are not required for one line of body

let findSum3 = (a,b)=>{
    let sum=a+b;
    return sum;
}

console.log(findSum(10,20));
console.log(findSum1(12,23));
console.log(findSum2(20,30));
console.log(findSum3(30,90));
