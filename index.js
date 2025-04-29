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

//Pegar todos elementos de uma tabela
function getAll(model, res){
    model.findAll().then(x => {res.status(200).json(x)})
    .catch(error => {res.status(500).json({ error: error.message})});
}

//Pegar um elemento de uma tabela com base no ID
function getId(model, res, searchId){
    //Se searchId não for um número retornar 400
    if(isNaN(searchId)){res.status(400).send()}
    else{ 
        //Pegar sempre o nome de um ID em uma tabela 
        const primaryKey = model.primaryKeyAttributes[0];
        model.findOne({
            where: {[primaryKey]: searchId}
        }).then(x => {
            //Se achar x mande 200 e seu conteudo
            if(x!=undefined){
                res.status(200).json(x);
            //Senão mande 404
            }else{
                res.status(404).send();
            }}).catch(error => {res.status(500).json({ error: error.message})});
    }
}

function createGetAllRoute(route, model){
    app.get("/"+route,(req, res) => {
        getAll(model, res);
    });
}

function createGetIdRoute(route, model){
    app.get("/"+route+"/:id",(req, res) => {
        getId(model, res, req.params.id);
    });
}

routes = [
    "clientes",
    "componentes",
    "computadores",
    "estoque",
    "vendas"
]

models = [
    Clientes,
    Componentes,
    Computadores,
    Estoque,
    Vendas
]

for(i=0;i<routes.length;i++){
    createGetAllRoute(routes[i], models[i]);
    createGetIdRoute(routes[i], models[i]);
}

//Abrindo porta do servidor 8080
app.listen(8080, () => {
});