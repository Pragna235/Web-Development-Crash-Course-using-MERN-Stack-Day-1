//create promise
let busy = false;
console.log("I promise my friend that I will call him after 10 secs!");
console.log("Friend is waiting!");

const promiseObject = new Promise((fulfilled, rejected)=>{
    setTimeout(()=>{
        if(busy===true){
            rejected("Sorry friend...");
        }
        else{
            fulfilled("Hello chick... how are you?!");
        }
    },5000);
}); //constructor

//consume promise
promiseObject.then((msg)=>{
    console.log("msg from then",msg);//fulfilled
}).catch((msg)=>{
    console.log("msg from catch",msg);//rejected
});

//console.log(promiseObject);
