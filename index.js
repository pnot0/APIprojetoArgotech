const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const con = require("./database/database");
const Clientes = require("./database/Clientes");
const Componentes = require("./database/Componentes");
const Estoque = require("./database/Estoque");
const Computadores = require("./database/Computadores");
const Vendas = require("./database/Vendas");

//Autenticação do banco de dados
//Try catch com conexão, retorna mensagem de erro caso falhe
con.authenticate()
.then(() => {
    console.log("connection success");
}).catch((errorMsg) => {
    console.log(errorMsg);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Pegar todos elementos de uma tabela
function getAll(model, res){
    model.findAll().then(x => {res.status(200).json(x)})
    .catch(error => {res.status(500).json({ error: error.message})});
}

//Pegar um elemento de uma tabela com base no ID
function getId(model, res, searchId){
    //Pegar sempre o nome de um ID em uma tabela 
    const primaryKey = model.primaryKeyAttributes[0];
    model.findOne({
        where: {[primaryKey]: searchId}
    }).then(x => {res.status(200).json(x)})
    .catch(error => {res.status(500).json({ error: error.message})});
}

app.get("/clientes",(req, res) => {
    getAll(Clientes, res);
});

app.get("/componentes",(req, res) => {
    getAll(Componentes, res);
})

app.get("/clientes/:id",(req, res) => {
    getId(Clientes, res, req.params.id);
})

app.get("/componentes/:id",(req, res) => {
    getId(Componentes, res, req.params.id);
})

//Abrindo porta do servidor 8080
app.listen(8080, () => {
});