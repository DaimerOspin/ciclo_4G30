//import connection library
let MongoClient=require("mongodb").MongoClient;

//import db conection
let {connectionString, dbName} =require("./dbConfig");
//function
async function testConnection(){
    try {
        let connection = await MongoClient.connect(connectionString,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        let db=connection.db(dbName);
        let numCollections= (await db.collections()).length;
        return numCollections>0;
    } catch (ex) {
        return false;
        
    }
    
}

async function findData(collectionName, filter){
    try {
        let connection = await MongoClient.connect(connectionString,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        let db=connection.db(dbName);
        let collection=db.collection(collectionName);
        let cursor=collection.find(filter);
        let result=[];
        let currentDocument= await cursor.next();
        while(currentDocument){
            result.push(currentDocument);
            currentDocument=await cursor.next();
        }
        return result;
    } catch (ex) {
        return null;
        
    }
}

//export
module.exports.testConnection=testConnection;
module.exports.findData=findData;