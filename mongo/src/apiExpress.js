const express = require('express')

const dbConnect = require('./mongodb')

const app = express()

// app .get('/',async(req, resp)=>{
//     let data = await dbConnect()
//     data = await data.find().toArray()
//     resp.send(data)
// })

// app.post('/',async(req,resp)=>{
//     let data = await dbConnect()
//     let result = await data.insertOne(req.body)   
//     resp.send(result)
// })
 
app .put('/', async(req,resp)=>{
    let data = await dnConnect()
    let result = await data.UpdateOne(
        {name:"suraj"},
        {$set:{name:"The suraj"}}
    )
    resp.send({result:"Update"})
    
} )

app.listen(5000)

