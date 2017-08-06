var dbUrl = require('../dbConfig').url;
var MongoClient = require('mongodb').MongoClient;
module.exports = function(req,res) {
    console.log('Inside blogPosts.js');
    console.log('Db url is: '+dbUrl);
    MongoClient.connect(dbUrl,function(err,database) {
            if(err) {
                console.log('Error: '+err);
            }
            else {
            console.log('Connection Successful');
            var db = database;
            db.collection('blog-posts').find({},function(err,cursor){
                        cursor.toArray(function(err,data){
                            //console.log('DDDDD'+JSON.stringify(data));
                            console.log(data);
                            res.json(data);
                        });
                    })
            }
            });
}