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
    insertOne: function(table, cols, vals, cb){
        var query = "INSERT INTO "+table+" (burgerName, devoured) values('"+cols+"',"+vals+");";
        connection.query(query,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(table, id, cb){
        var query = "UPDATE "+table+" SET devoured=true where ?";
        connection.query(query, {id_burger:id}, function(err,result){
            if(err){
                throw err;
            }
            cb(result)
        })
    }
};

module.export=orm;