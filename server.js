require('dotenv').config()
const { connect } = require('mongoose');
const app = require('./app');
const http = require('http')

const PORT = process.env.PORT;
const server = http.createServer(app);


connect(process.env.MONGO_URI)
.then().catch(()=>console.log('Error connecting to db'))

server.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
})