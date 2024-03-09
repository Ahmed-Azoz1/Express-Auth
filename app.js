// const express = require("express")  # type commonjs
import express from "express"  // type module
import bcrypt from "bcrypt"

const app = express()
const port = 3000;



// In-memory  Or Local
const users = [];



// MidleWare Express Json
app.use(express.json())


app.post('/register',async(req,res)=>{
    try{

        const {email , password} = req.body
        // Find User 
        const findUser = users.find((user)=>{
            return email == user.email
        })

        if(findUser){
            res.status(400).send("Wrong Email Or Password ! Try Again")
        }

        // Hash Password 
        const hashedPassword = await bcrypt.hash(password,10)
        users.push({email,password:hashedPassword})
        res.status(201).send("Registered SuccessFully!") // Protocol Registration success

    }catch(err){
        // res.status(500).send(`Internal Server Error ${err}`)
        res.status(500).send({message : err.message})
    }
})

app.post("")


app.listen(port,()=>{
    console.log(`Server is Started On Port ${port}`)
})