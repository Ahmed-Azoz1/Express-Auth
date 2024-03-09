// const express = require("express")  # type commonjs
import express from "express"  // type module
import bcrypt from "bcrypt"

const app = express()
const port = 3000;



// In-memory  Or Local
const users = [];



// MidleWare Express Json
app.use(express.json())


app.post('/register',(req,res)=>{
    try{

    }catch(err){
        res.status(500).send(`Internal Server Error ${err}`)
    }
})


app.listen(port,()=>{
    console.log(`Server is Started On Port ${port}`)
})