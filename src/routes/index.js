const routes = require('express').Router()

const CustumersController = require ('../controllers/custumers')

//initial
routes.get('/', CustumersController.initial
)

//registro
routes.get('/register', CustumersController.index)
routes.post('/register/add', CustumersController.add)

//listar
routes.get('/list', CustumersController.listUsers)
module.exports= routes