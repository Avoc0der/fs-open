const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const logger = require('./utils/logger')
const config = require('./utils/config')
const midlleware = require('./utils/middleware')
const blogsRouter = require('./controllers/blogs')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(midlleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(midlleware.errorHandler)
app.use(midlleware.unknownEndpoint)

module.exports = app
