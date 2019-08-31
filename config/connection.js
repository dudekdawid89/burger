const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "r687eta5khfddla9",
    password: "ehhl4jgpcm1n3od8",
    database: "jx44sxmt9toeqr48"
});

connection.connect(err =>{
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;