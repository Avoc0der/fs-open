const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

personRouter.get('/:id', (request, response, next) => {
  const id = request.params.id
  Person.findById(id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => {
      next(error)
    })
})

personRouter.post('/', (request, response, next) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'name is missing',
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number is missing',
    })
  }

  Person.findOne({ name: body.name })
    .then((person) => {
      if (person) {
        return response.status(409).json({
          error: 'Person already exist in phonebook',
        })
      }
    })
    .catch((error) => {
      next(error)
    })

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson)
    })
    .catch((error) => {
      next(error)
    })
})

personRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => {
      next(error)
    })
})

personRouter.put('/:id', (request, response, next) => {
  const person = {
    name: request.body.name,
    number: request.body.number,
  }
  Person.findByIdAndUpdate(request.params.id, person, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then((updatedPerson) => {
      response.json(updatedPerson)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = personRouter
