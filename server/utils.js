(() => {
    const MongoClient = require('mongodb').MongoClient
    const connection = require("./config/config")


    /* Connecting to the Database */
    const getMongoClient = (local = false) => { // local is set to false since I'm using atlas set to true if using compass
        let uri = `mongodb+srv://${connection.USERNAME}:${connection.PASSOWRD}@${connection.SERVER}/?retryWrites=true&w=majority&appName=Testing`
        if (local) {
            uri = `mongodb://127.0.0.1:27017/${connection.DATABASE}`
        }
        console.log(`Connection String<<${uri}`)
        if(!MongoClient){     // This will make sure that it will only have one mongodb client
            mongoClient = new MongoClient(uri)
            return mongoClient
        }
        return new MongoClient(uri)
    }

    //-------------------------------------------------------------------------
    /**
     * Data Manipulation Language (DML) functions
     */
    //-------------------------------------------------------------------------
    //find matching documents
    const find = async (collection, query) => {
        return collection.find(query).toArray()
            .catch(err => {
                console.log("Could not find ", query, err.message);
            })
    }
    //delete matching documents
    const deleteMany = async (collection, query) => {
        return collection.deleteMany(query)
            .catch(err => {
                console.log("Could not delete many ", query, err.message);
            })
    }
    //delete one matching document
    const deleteOne = async (collection, query) => {
        return collection.deleteOne(query)
            .catch(err => {
                console.log("Could not delete one ", query, err.message);
            })
    }
    //insert data into our collection
    const insertMany = async (collection, documents) => {
        return collection.insertMany(documents)
            .then(res => console.log("Data inserted with IDs", res.insertedIds))
            .catch(err => {
                console.log("Could not add data ", err.message);
                //For now, ingore duplicate entry errors, otherwise re-throw the error for the next catch
                if (!(err.name === 'BulkWriteError' && err.code === 11000)) throw err;
            })
    }
    const insertOne = async (collection, document) => {
        return await collection.insertOne(document)
            .then(res => console.log("Data inserted with ID", res.insertedId))
            .catch(err => {
                console.log("Could not add data ", err.message);
                //For now, ingore duplicate entry errors, otherwise re-throw the error for the next catch
                if (!(err.name === 'BulkWriteError' && err.code === 11000)) throw err;
            })
    }
    //-------------------------------------------------------------------------

    const logRequest = async (req, res, next) => {
        const client = util.getMongoClient()
        client.connect()
            .then(conn => {
                console.log('\t|inside connect()')
                console.log('\t|Connected successfully to MongoDB!',
                    conn.s.url.replace(/:([^:@]{1,})@/, ':****@'))
                /**
          * Create a collection in a MongoDB database
          * Like a database, a collection will be created if it does not exist
          * The collection will only be created once we insert a document
          */
         //let log2 = Log(req.method, req.url, req.query, res.statusCode)
                let collection = client.db().collection("Requests")
                let log = {
                    Timestamp: new Date().getUTCDate(),
                    Method: req.method,
                    Path: req.url,
                    Query: req.query,
                    'Status Code': res.statusCode,
                }
                //console.log(log)
                util.insertOne(collection, log)
                
            })
            .catch(err => console.log(`\t|Could not connect to MongoDB Server\n\t|${err}`))
            .finally(() => {
                //client.close()
                //console.log('Disconnected')
            })
            next()
    }
    const util = {
     /* url: 'localhost',
        username: 'webuser',
        password: 'letmein',
        port: 22643,
        database: 'forum',
        collections: ['logs', 'posts', 'users', 'roles'], */
        getMongoClient: getMongoClient,
        logRequest: logRequest,
        find: find,
        insertOne: insertOne,
        insertMany: insertMany,
        getMongoClient: getMongoClient,
        logRequest: logRequest,
    }
    const moduleExport = util
    if (typeof __dirname != 'undefined')
        module.exports = moduleExport

})()