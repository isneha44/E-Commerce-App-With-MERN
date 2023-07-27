const express = require("express")
const cors = require("cors")
const mogoose = require ("mongoose")

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send("server is running")
})
app.post("/Signup",(req,res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>console.log("server is running at port : " +PORT))