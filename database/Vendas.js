const sequelize = require("sequelize");
const con = require("./database");

const Vendas = con.define("tbvendas",{
    idvenda:{
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    idcli:{
        type: sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    idpc:{
        type: sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    quantvenda:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    precovenda:{
        type: sequelize.DECIMAL(8,2),
        allowNull: false
    },
    totalvenda:{
        type: sequelize.DECIMAL(8,2),
        allowNull: false
    },
    datavenda:{
        type: sequelize.TIME
    }
},{
    createdAt: false,
    updatedAt: false
})

Vendas.sync({force: false}).then(() => {});

module.exports = Vendas;