const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/",(req,res) =>{
    burger.selectAll(data=>{
        let hdbrsObj = {
            burgers:data
        };
        console.log(hdbrsObj)
        res.render("index",hdbrsObj)
    });
});

router.post("/api/burgers", (req,res) =>{
    burger.insertOne(
        ["'"+req.body.burgerName+"'", req.body.devoured],
        result =>{
            res.json({id_burger: result.insertId})
        }
    );
});

router.put("/api/burgers/:id", (req,res) =>{
    id_burger=req.params.id;
    console.log(id_burger)
    burger.updateOne(id_burger, result=>{
        if (result.changedRows == 0) {
  
            return res.status(404).end();
          } else {
            res.status(200).end();
          }

    });    
});

router.delete("/api/burger/:id", (req,res)=>{
    id_burger=req.params.id;
    burger.deleteOne(id_burger,result =>{
        if (result.affectedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
});
});
  
module.exports = router;