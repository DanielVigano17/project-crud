const CustumersModel = require('../models/custumers')
const {crypto} = require('../utils/password')

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




module.exports ={
    add
}