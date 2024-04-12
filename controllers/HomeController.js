const util = require(`${__dirname}/../models/utils`)
const express = require('express')
const homeController = express.Router()
const config = require(`${__dirname}/../server/config/config`)
const logs = []

homeController.get('/index', util.logRequest , async (request, response) => {
    console.log("Inside get /index")
    response.sendFile('/index.html', {'root': config.ROOT})
})

module.exports = homeController