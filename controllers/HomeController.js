const util = require(`${__dirname}/../models/utils`)
const express = require('express')
const homeController = express.Router()
const config = require(`${__dirname}/../server/config/config`)


homeController.get('/index', util.logRequest , async (request, response) => {
    console.log("Inside get /index")

    //1. connect to DB
    //2. get all products
    //3. loop thru products and display them


    response.sendFile('/index.html', {'root': config.ROOT})
})


homeController.get('/contact', util.logRequest , async (request, response) => {
    console.log("Inside get /contact")

    //1. connect to DB
    //2. get all products
    //3. loop thru products and display them


    response.sendFile('/contact.html', {'root': config.ROOT})
})


homeController.get('/about', util.logRequest , async (request, response) => {
    console.log("Inside get /about")

    //1. connect to DB
    //2. get all products
    //3. loop thru products and display them


    response.sendFile('/about.html', {'root': config.ROOT})
})

module.exports = homeController