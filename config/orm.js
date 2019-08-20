var connection = require("../config/connection")

var orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM" +table+ ";", function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    // insertOne: function()
};