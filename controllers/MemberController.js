const util = require(`${__dirname}/../models/utils`)
const config = require(`${__dirname}/../server/config/config`)
const mongodbClient = util.getMongoClient()
const bcrypt = require("bcrypt")
const express = require('express')
const User = require("../models/user")
const memberController = express.Router()

memberController.get('/login', util.logRequest , async (request, response) => {
    console.log("Inside memberController.get /login")
    response.sendFile('/login.html', {'root': config.ROOT})
})

memberController.get('/signup', util.logRequest ,async (request, response) => {
    console.log("Inside memberController.get('/signup')")
    response.sendFile('/signup.html', {'root': config.ROOT})
})

memberController.post('/signup', util.logRequest, async (request, response) => {
    console.info(`\t|Inside memberController.post('/signup')`)
    const { email, password } = request.body
    console.log(`\t|Password = ${password}`)
    let collection = mongodbClient.db().collection('Users')  
    let test = await util.find(collection, {email:email})
    if(test == 0){
        let hashed = await bcrypt.hash(password, config.SALT_ROUNDS)
        console.log(`${password} hash is ${hashed}`)
        const member = User(email, hashed)
        util.insertOne(collection, member)
        response
        .status(200)
        .json({
            success: {
                email: email,
                message: `${email} was added successfuly to members.`,
            },
        })
    }
    else{
        response
            .status(200)
            .json({ error: `${email} already exists. Choose a different email` })
    }    
})

memberController.post('/login', util.logRequest, async (request, response) => {
    console.info(`\t|Inside memberController.post('/login')`)
    const { email, password } = request.body
    let collection = mongodbClient.db().collection('Users') 
    let test = await util.find(collection, {email:email})
    if(test == 0){
        response
        .status(200)
        .json({ error: `Email entered is incorrect.` })   
    }
    else{
        console.log("Will now start checking password")
        const isMatched = await bcrypt.compare(password, test[0].hashedPassword);
        console.log(isMatched)
        if (!isMatched) {
            response
                .status(200)
                .json({ error: `Password entered is incorrect.` }) 
        } else {
            response
                .status(200)
                .json({ success: `${email} logged in successfully!` })
        }
    }    

})

module.exports = memberController
