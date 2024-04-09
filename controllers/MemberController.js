const util = require(`${__dirname}/../server/utils`)
const config = require(`${__dirname}/../server/config/config`)
const user = require(`${__dirname}/../models/user`)
const mongodbClient = util.getMongoClient()
const bcrypt = require("bcrypt")
const express = require('express')
const memberController = express.Router()
const logs = []

memberController.get('/login',  (request, response) => {
    console.log("Inside get /login")
})

memberController.get('/signup', util.logRequest ,async (request, response) => {
    console.info(`\t|Inside app.post('/signup')`)
    const { email, password } = request.body
    console.log(`\t|Password = ${password}`)
    let hashed = await bcrypt.hash(password, config.SALT_ROUNDS)
    console.log(`${password} hash is ${hashed}`)
    const member = user(email, hashed)
})

module.exports = memberController
