const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zeetec:Zeetec123321@cluster0-wkh9m.mongodb.net/test?retryWrites=true&w=majority";
export var dbo = null
MongoClient.connect(uri, function(err, client) {
    if(err) { console.error(err) }
    dbo = client.db('zeetec')
});