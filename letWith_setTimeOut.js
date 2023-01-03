

for(let i=1; i<=5;i++){
    setTimeout(function(){
        console.log("value of i = ",i);
    },i);
}

// console.log("Value of i outside the loop = ",i);
/* it will occure error called undefined i and not run the loop also because the loop have setTimeOut function that is y
 it give's error first (to check uncomment the upper line of code)*/