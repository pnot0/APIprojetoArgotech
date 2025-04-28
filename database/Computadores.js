const sequelize = require("sequelize");
const con = require("./database");

const Computadores = con.define("tbpcs",{
    idpc:{
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nomepc:{
        type: sequelize.STRING(30),
        allowNull: false
    },
    descpc:{
        type: sequelize.STRING(50)
    },
    quantpcs:{
        type: sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

Computadores.sync({force: false}).then(() => {});

module.exports = Computadores;