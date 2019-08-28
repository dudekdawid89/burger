const connection = require("../config/connection.js")

let orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM " +table+ ";",(err,result) =>{
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(table, vals, cb){
        let query = "INSERT INTO "+table+" (burgerName, devoured) values("+vals+");";
        console.log(query)
        connection.query(query,(err,result) =>{
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(table, id, cb){
        let query = "UPDATE "+table+" SET devoured=true where id_burger="+id;
        console.log(query)
        connection.query(query, (err,result) =>{
            if(err){
                throw err;
            }
            cb(result)
        })
    },
    deleteOne: function(table,id,cb){
        var query = "DELETE FROM "+table+" where ?";
        connection.query(query, {id_burger:id},(err,result) =>{
            if(err){
                throw err;
            }
            cb(result)
        })
    }
};

module.exports=orm;