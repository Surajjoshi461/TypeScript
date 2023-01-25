const getData= require('./mongodb')
console.log(null);

// getData().then((resp)=>{
//     resp.find({name:"suraj"}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })

const main = async ()=>{
    let data = await getData()
    data = await data.find({name:'suraj'}).toArray()
    if (data){
        console.warn(data);
    } else console.log('Empty database');
}
main()