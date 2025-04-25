const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const con = require("./database/database");

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

//Abrindo porta do servidor 8080
app.listen(8080, () => {
    console.log("iniciado");
})