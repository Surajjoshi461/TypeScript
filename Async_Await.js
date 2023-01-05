

async function myFunction(){
    console.log("Inside myFuntcion");
    const response = await fetch('https://api.github.com/users')
    
    console.log("before data");
    const data = await response.json()
    
    console.log("data resolved");
    return data
}

console.log("Before calling myFunction");
let a = myFunction();

console.log("After calling myFunction");
a.then(data => console.log(data));

console.log("Last kine of this js file");
