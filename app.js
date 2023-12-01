require('dotenv').config()
const express = require('express')
const app = express();
const productRouter = require('./routes/productRoutes')

app.use(express.json())
app.use('/app/v1/products', productRouter)


module.exports = app;