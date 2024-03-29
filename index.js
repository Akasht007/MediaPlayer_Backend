//import json-server library in index.js

const jsonServer = require('json-server') 

//create server using jsonServer library

const mediaPlayerServer= jsonServer.create()

//create a path to db.json 

const router = jsonServer.router('db.json')

//middleware to convert

const middleware = jsonServer.defaults()

//connect 


mediaPlayerServer.use(middleware)

mediaPlayerServer.use(router)

//setup port for server 

const port = 5000 || process.env.PORT 

//monitor 5000

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for request`);
})