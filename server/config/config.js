(() => {
    const config = {}
    config.PORT = process.env.PORT || 9090
    config.ROOT = `${__dirname}/../../views`
    config.SALT_ROUNDS = 10
    config.LOG_FILE = `${__dirname}/../logs/nodejs.log`
    config.MEMBERS = `${__dirname}/../../models/data/members.json`
    config.USERS = `${__dirname}/../../models/data/users.json`
    config.SERVER = 'testing.oa1ssvu.mongodb.net'
    config.USERNAME = 'aedrianformento'
    config.PASSOWRD = 'newpass123'
    config.DATABASE = 'E-commerce'

    module.exports = config
})()
