const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to home page with aws node")
})

const port = process.env.port || 3000;
app.listen(port,()=>{
   console.log('started server at port')
})