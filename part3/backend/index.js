// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// require('dotenv').config()
// const Person = require('./models/person')

// const app = express()
// app.use(express.json())
// app.use(cors())
// app.use(express.static('build'))
// morgan.token('body', (request) => JSON.stringify(request.body))
// app.use(
//   morgan(':method :url :status :res[content-length] - :response-time ms :body')
// )

// const phonebookSize = Person.find({}).then((persons) => persons.length)

// app.get('/info', (request, response) => {
//   response.send(`
//   <div>
//     <div>Phonebook has info for ${phonebookSize} people</div>
//     <div>${new Date()}</div>
//   </div>
//   `)
// })



// const errorHandler = (error, request, response, next) => {
//   // console.error(error.message);

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   }
//   console.log('Error', error)
//   if (error.name === 'ValidationError') {
//     return response.status(400).send({ error: error.message })
//   }

//   next(error)
// }

// app.use(errorHandler)

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
