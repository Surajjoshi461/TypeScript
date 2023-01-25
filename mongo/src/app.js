

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/apies",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connection successful..~~"))
.catch((err)=>console.log(err))

const studentListSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    city : String,
    enroll : String,
    contact : Number,
    date :{
        type : Date,
        default : Date.now
    }
})

const StudentList = new mongoose.model("Studentlist",studentListSchema)

const getStudent = async ()=>{
    try{


        const enrollStudent = new StudentList({
            name : "suraj",
            city : "Indore",
            enroll : "5611sd98230",
            contact : 6236828656
        })



        const enrollStudent2 = new StudentList({
            name : "Alpha",
            city : "Indore",
            enroll : "561d9a8230",
            contact : 6232328656
        })


        const enrollStudent3 = new StudentList({
            name : "Beta",
            city : "Indore",
            enroll : "1123sd98230",
            contact : 234828656
        })


        const enrollStudent4 = new StudentList({
            name : "Gama",
            city : "Indore",
            enroll : "611sd98230",
            contact : 9962348656
        })
        const result = await StudentList.insertMany([enrollStudent,enrollStudent2,enrollStudent3,enrollStudent4])
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
getStudent()