const getData = require('./mongodb')

const deleteData = async ()=>{
    const db = await getData()
    const result = await db.deleteOne(
        {name:'Java'}
    )
    if(result.deletedCount>0) console.log("Data Deleted successfully");
    else console.log("Value not found");
    
    
    console.log(result);//checking acknowledged data
}
deleteData()