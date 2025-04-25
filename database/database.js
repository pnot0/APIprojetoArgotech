const sequelize = require("sequelize");

//Criando conexão do banco e exportando ela
const con = new sequelize({
    //colocar configurações do banco aqui que estão no chat #dev
});

module.exports = con;