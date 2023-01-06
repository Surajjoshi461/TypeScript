

const Project = [
    {ProjectName : "Number Cube"},
    {ProjectName : "Online Content Downloader"}
]

function addProject(newProject){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            Project.push(newProject)
            console.log("Project has been added..!!");
            let error = false
            if(!error){
                resolve()
            }else{
                reject("Sorry not fulfilled")
            }
        },5000);
    
    })
}

function getProject(){
    setTimeout(function(){
        let str = ""
        Project.forEach(Project => {
            str += `<li>${Project.ProjectName}</li>`
        });
        document.getElementById("demo").innerHTML = str
        console.log("Project's have been fetched");
    },1000);
}

let newProject = {ProjectName : "Company website"}

addProject(newProject).then(getProject).catch(function(error){
    console.log("Error occure "+error);
})
// getProject()
