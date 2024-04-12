const util = require(`${__dirname}/../server/utils`)
const express = require('express')
const homeController = express.Router()
const config = require(`${__dirname}/../server/config/config`)
const logs = []

homeController.get('/index', util.logRequest , async (request, response) => {
    console.log("Inside get /index")

    //1. connect to DB
    //2. get all products
    //3. loop thru products and display them


    response.sendFile('/index.html', {'root': config.ROOT})
})

module.exports = homeController