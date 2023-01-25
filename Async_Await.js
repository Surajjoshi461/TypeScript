

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

console.log("Last line of this js file");



// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();