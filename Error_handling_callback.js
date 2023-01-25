Student = [
    {name : 'Alpha', email : 'alpha@.com'},
    {name : 'beta', email : 'beta@.com'}
]

function addStudent(newStudent,callback){
    setTimeout(() => {
        if (Student.push(newStudent)){
            console.log("Student has been added");
            error = null
        }else error = Error
        callback(error)
    }, 6000);
}

function getStudent(error){
    if (error){

        console.log("unable to fetch Student");
      
    }else{

        setTimeout(()=>{

            let str = ""
            Student.forEach((Student) => {
                str+= `<li>${Student.name}</li>`
            });
            document.getElementById("demo").innerHTML = str
            console.log("Student have been fetched ");
    
            },2000);
    
    }
}


let newStudent = {name : 'Gama', email : 'gama@.com'}

addStudent(newStudent,getStudent)