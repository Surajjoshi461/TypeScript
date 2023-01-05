

const http = require('http')

http.createServer((req,resp)=>{
    resp.write(`<h1>Time : ${clock()}</h1>`)
}).listen(4500)

function clock(){
    let d = new Date()

    return(
        d.getHours()+" : "+
        d.getMinutes()+" : "+
        d.getSeconds()
    )
}

