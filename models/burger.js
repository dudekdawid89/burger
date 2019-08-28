let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", res=>{
            cb(res);
        });
    },
    insertOne: function(vals,cb){
        orm.insertOne("burgers", vals, res=>{
            cb(res);
        });
    },
    updateOne: function(id, cb){
        orm.updateOne("burgers",id, res=>{
            cb(res);
        });
    },
    deleteOne: function(id,cb){
        orm.deleteOne("burgers",id, res=>{
            cb(res);
        });
    }
};

module.exports = burger;