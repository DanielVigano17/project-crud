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

//editar
routes.get('/edit',CustumersController.formEdit)
routes.post('/edit/:id',CustumersController.edit)

//remover
routes.get('/remove/:id',CustumersController.remove)

module.exports= routes