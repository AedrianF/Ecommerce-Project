(() => {
    const fs = require('fs')
    const express = require('express')
    const homeController = require(`${__dirname}/../controllers/HomeController`)
    const memberController = require(`${__dirname}/../controllers/MemberController`)
    const app = express()
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

    app.use(homeController)     
    app.use(memberController)

 
    // Start Node.js HTTP webserver
    app.listen(config.PORT, "127.0.0.1", () => {
        console.log(`\t|Server listening on ${config.PORT}`)
    })
})()






