

const express = require('express')
const reqFilter = require('./middleware')
const app = express()
const route = express.Router()

route.use(reqFilter)

// app.use(reqFilter)


app.get('',(req,res)=>{
    console.log("data send by website",req.query.name);
    res.send("Welcome..to the my world!!~")
})

app.get('/about',(req,res)=>{
    res.send("Ohhhh... you want to know about my self.. alright")
})

route.get('/help',(req,res)=>{
    res.send('Tell me how can i help you')
})
app.use('/',route)

app.listen(4500)
