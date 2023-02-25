const express = require('express')
const path = require ('path')


const app = express()

//Definindo template engine
app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'ejs')


//definindo os arquivos públicos 
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended:true}))

//rotas
app.get('/', (req,res)=>{
    res.render("index")
})


//404 error (not found)
app.use((req,res)=>{
    res.send("Página não encontrada!")
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))