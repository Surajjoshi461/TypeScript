const mysql = require("mysql")

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

con.connect((err)=>{
    if (err) console.log(err);
    else console.log("Connected..!!!");
})

con.query('select * from users',(err,result)=>{
    console.warn(result);
})   