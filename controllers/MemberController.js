const util = require(`${__dirname}/../server/utils`)
const config = require(`${__dirname}/../server/config/config`)
const user = require(`${__dirname}/../models/user`)
const mongodbClient = util.getMongoClient()
const bcrypt = require("bcrypt")
const express = require('express')
const User = require("../models/user")
const memberController = express.Router()
const logs = []

memberController.get('/login', util.logRequest , async (request, response) => {
    console.log("Inside get /login")
    response.sendFile('/login.html', {'root': config.ROOT})
})

memberController.get('/signup', util.logRequest ,async (request, response) => {
    console.log("Inside app.get('/signup')")
    response.sendFile('/signup.html', {'root': config.ROOT})
})

memberController.post('/signup', util.logRequest, async (request, response) => {
    console.info(`\t|Inside app.post('/signup')`)
    const { email, password } = request.body
    console.log(`\t|Password = ${password}`)
    let collection = mongodbClient.db().collection('Users')  
   /* let hashed = await bcrypt.hash(password, config.SALT_ROUNDS)
    console.log(`${password} hash is ${hashed}`)
    const member = User(email, hashed)
    util.insertOne(collection, member) */
    let test = await util.find(collection, {email:email})
    //console.log(test.[0].email)     
})

module.exports = memberController
