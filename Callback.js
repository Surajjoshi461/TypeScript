

const Project = [
    {Username : "Suraj", Proj : "Number Cube"},
    {Username : "suraj", Proj : "Online Content Downloader"}
]

function addProject(newProject,callback){
    setTimeout(()=>{
        Project.push(newProject);
        console.log("Project has been added");
        callback()
    },8000);
}

function getProject(){
    setTimeout(()=>{
        let str=""
        Project.forEach((Project) => {
            str +=`<li> ${Project.Proj}</li>`
        });
        document.getElementById("student").innerHTML = str; 
        console.log("Project have been fatche");
    },1000);
}

let newProject = {Username : "suraj", Proj : "Sochenge "}

addProject(newProject,getProject)

