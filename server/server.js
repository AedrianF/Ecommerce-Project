(() => {
    //const config = require(`${__dirname}/config/config`)
    //const Utils = require(`${__dirname}/utils`)
    const fs = require('fs')
    const express = require('express')
    const app = express()
    const logs = []
    const config = require(`${__dirname}/config/config`)

    /**
     * Middleware declarations
     */
    app.use(express.json());
    app.use((request, response, next) => {
       // config.logFile(request, logs)
        next()
    })
    
    app.use(express.static(`${__dirname}/../views`))
    app.get('/',  (request, response) => {
        config.logFile(request, logs)
        response.render(`${config.ROOT}/index`, {page: "index", title: "Home page"})
    })
    app.get('/index', (request, response) => {
        response.send(`${config.ROOT}/index`)
    })
    

    // Start Node.js HTTP webserver
    app.listen(config.PORT, "127.0.0.1", () => {
        console.log(`\t|Server listening on ${config.PORT}`)
    })
})()






