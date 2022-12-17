const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const connectDB = require('./db')
env.config()
const app = express()
const cors = require('cors')

const port = 5008 || process.env.PORT

//routes
const postRoute = require('./src/routes/post.route.js')

//database connection
connectDB()

// middleware
app.use(express.json())
app.use(cors())

//APIs
app.use('/api', postRoute)

app.get('/test', (req, res) => {
  res.send('Welcome to RentEasy Server')
})

app.listen(port, () => {
  console.log(`Assignment server started on server ${port}`)
})
