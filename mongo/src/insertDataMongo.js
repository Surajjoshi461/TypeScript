const getData = require('./mongodb')

const insert = async()=>{
    const db = await getData()
    const result = await db.insertMany([
        {name: 'Boot', city: 'Strap', enroll: '23908j3',contact: 78932472},
        {name: 'Python', city: 'Django', enroll: '1991',contact: 08097232},
        {name: 'C#', city: 'hash', enroll: '98cse3',contact: 93232472},
        {name: 'C', enroll: '02cs23',contact: 87232472},  
        {name: 'C++', city: 'pluse', enroll: '923cs2',contact: 99332472}
    ])    
    if (result.acknowledged){
        console.log("Inserted successfully");
    }else console.log('data can\'t be added');

}


insert()


