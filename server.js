const express = require('express')

const app = express();



app.get('/',(req,res)=>{
    res.send("Hello")
})




//Hi from akash






app.listen(3000,()=>{
    console.log(`Running in 3000`)
})