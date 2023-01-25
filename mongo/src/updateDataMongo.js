const getData =  require('./mongodb')

const update = async()=>{
    const db = await getData()
    const result = await db.updateOne(
        {name:'xJava'},{
            $set: {name: 'Type',city: 'Script'}
        }
    )
    if(result.modifiedCount){
        console.log('Updated successfully');
    }else console.log('Value not found');
}

update()
