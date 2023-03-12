const CustumersModel = require('../models/custumers')
const {crypto} = require('../utils/password')

function initial  (req,res){
    res.render('index')    
}

function index(req,res) {
    res.render('register')    
}

async function add(req,res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)
   
    const register = new CustumersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })
    register.save()
    res.redirect('/')
}

async function listUsers(req,res){
   const users = await CustumersModel.find()

    res.render('listUsers',{
        title:'Listagem de Usuários',
        users:users,
    })
}



module.exports ={
    add,
    index,
    initial,
    listUsers
}