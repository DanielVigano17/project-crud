const routes = require('express').Router()

const CustumersController = require ('../controllers/custumers')

routes.get('/', (req,res)=>{
    res.render("index")
})

routes.get('/register', (req,res)=>{
    res.render('register')    
})

routes.post('/register/add', CustumersController.add)

module.exports= routes