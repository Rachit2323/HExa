const express=require("express");
const router=express();
const mongoose=require("mongoose");
const user=require("../model/user");
const axios=require("axios");




router.get("/data",async(req,res)=>{
    try{
        let result={};

       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(response => {
        // result=response.data;
         return res.status(200).json(response.data);
       })
     
     
    }
    catch(error)
    {
        return res.status(402).json("ERROR");
    }
})


router.post("/search", async (req, res) => {
    try {
      const { name } = req.body; 
      console.log(req.body);
  
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          const result = response.data;
  
          const filteredUsers = result.filter(item => {
            return (
              item.name === name ||
              item.username === name ||
              item.email === name
            );
          });
  
          console.log(filteredUsers);
          return res.status(200).json(filteredUsers);
        });
    } catch (error) {
      return res.status(402).json("ERROR");
    }
  });
  
  module.exports = router;
 
