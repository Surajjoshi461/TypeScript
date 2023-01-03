
var a="Hello..."
let b="Good"
const c= "Morning"

console.log(a+" "+b+" "+c);

console.log("For Loop with var variable start's");
for(var i=1; i<=5; i++){
    console.log("Value i = "+i);

}
console.log("Loop end");

console.log("out side of for loop the Value i = "+i);


console.log("For Loop with let variable start's");

for(let j=1; j<=5; j++){
    console.log("value j = "+j);
}


console.log("Loop end");

console.log("out side of for loop the Value i = "+j);//give's error that j is not define


