//first, npm init
//npm install nodemen, express, mongoose



//in app.js
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')


//connect to db // mongoose is odm object data modeling for Mongodb and node js
mongoose.connect("db url with passworkd", {useNewUrlParser: true})

//MiddleWare
app.use(express.json())

//route middleares
app.use('./api/', authRoutes)

//listen to url
app.listen(3000, ()=> console.log("connected to 3000"))


//in router file

const router = require('express').Router()
const User = require('..model/user')
router.post('/', (req, res)=>{
    const user = new User({
        ...
    })
    //we can use try or promise

    user.save().then(()=> res.json("saved"))
        .catch(err =>
            res.status(404).json({ noformfound: 'No form found with that ID' })
        );
    res.send("register")
})
//module.export = router

//in model file
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        ....
    }
})
//module.exports = mongoose.model('User', UserSchema)