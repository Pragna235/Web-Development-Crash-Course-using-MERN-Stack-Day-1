console.log("one");

for(let index=0;index<10000000000;index++){}; //time-consuming for the next two lines of code as the next two lines do not depend on the result of this loop

console.log("two");
console.log("three");


console.log("one");

setTimeout(()=>{
    console.log("Hello World!")
},5000);

console.log("two");
console.log("three");

//three friends visited a restaurant
console.log("Three customers visited restaurant");
console.log("cust-1 ordered biryani which takes 10 secs to prepare");
setTimeout(()=>{
    console.log("cust-1 received biryani");
},10000);
console.log("cust-2 ordered curd rice which takes 4 secs to prepare");
setTimeout(()=>{
    console.log("cust-2 received curd rice");
},4000);
console.log("cust-3 ordered water which takes 1 sec to prepare");
setTimeout(()=>{
    console.log("cust-3 received water");
},1000);

console.log("Employee went to Office");
console.log("1. Employee wanted to meet manager and was told to wait 10 secs");
setTimeout(()=>{
    console.log("Employee met Manager");
},10000);
console.log("2. Employee wanted to talk to his friend which takes 2 secs");
setTimeout(()=>{
    console.log("Employee talked to his friend");
},2000);
console.log("3. Employee wants to fix a bug which takes 3 secs");
setTimeout(()=>{
    console.log("Employee fixed the bug");
},3000);



