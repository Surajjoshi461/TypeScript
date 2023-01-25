

const fs = require('fs')

const path = require('path')

const dirPath = path.join(__dirname,'Crud')

const filePath = `${dirPath}/alpha.txt`

fs.writeFileSync(filePath,"Hello, myself Alpha")

fs.readFile(filePath,'utf8', (error,item)=>{
    console.log(item);
})

// fs.appendFile(filePath,". Nice to meet you buddy..!! :)",(error)=>{
//     if(!error) console.log("File have been updated");
// })

// fs.rename(`${dirPath}/beta.txt`,filePath,(error)=>{
//     console.log("File is renamed");
// })

// fs.unlinkSync(filePath)     