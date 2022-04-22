const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to home page with aws node")
})

app.listen(3000,()=>{
   console.log('started server at port')
})