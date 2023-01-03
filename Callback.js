

const Technology = [
    {Username : "Suraj", Tech : "JavaScript"},
    {Username : "suraj", Tech : "NodeJs"}
]

function addTech(newTech,callback){
    setTimeout(()=>{
        Technology.push(newTech);
        console.log("Technology has been added");
        callback()
    },8000);
}

function getTech(){
    setTimeout(()=>{
        let str=""
        Technology.forEach((Technology) => {
            str +=`<li> ${Technology.Tech}</li>`
        });
        document.getElementById("student").innerHTML = str; 
        console.log("Technology have been fatche");
    },1000);
}

let newTech = {Username : "suraj", Tech : "Python"}

addTech(newTech,getTech)


 