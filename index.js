const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/routes.routes')
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGO_URL)
app.use('/',require('./routes/routes.routes'))
app.listen(process.env.PORT,()=>console.log(`serveur lancé dans le port ${process.env.PORT}`))