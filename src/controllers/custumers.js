const CustumersModel = require('../models/custumers')
const {crypto} = require('../utils/password')

function initial  (req,res){
    res.render('index')    
}

function index(req,res) {
    res.render('register')    
}


//Adicionar
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

//listar
async function listUsers(req,res){
   const users = await CustumersModel.find()

    res.render('listUsers',{
        title:'Listagem de Usuários',
        users:users,
    })
}

//Editar
async function formEdit(req,res){
    const {id} = req.query

    const user = await CustumersModel.findById(id)

    res.render('edit', {title:'Editar Usuário',
user
})
}
async function edit (req,res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const {id} = req.params

    const user= await CustumersModel.findById(id)

    user.name = name
    user.age = age
    user.email =email

    user.save()

    res.render('edit',{
        title:'Editar Usuário',
        user,
        message:'Alterado com sucesso'
    })
}

//Remover
async function remove(req,res){
    const {id} = req.params

    const remove = await CustumersModel.deleteOne({_id: id})

    if(remove.ok!=0){
        res.redirect('/list')
    }else{
        console.log('deu merda')
    }
}



module.exports ={
    add,
    index,
    initial,
    listUsers,
    formEdit,
    edit,
    remove
}