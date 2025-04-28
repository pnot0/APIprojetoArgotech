const sequelize = require("sequelize");
const con = require("./database");

const Componentes = con.define("tbcomps",{
    idcomp:{
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    idpc:{
        type: sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    catcomp:{
        type: sequelize.STRING(20),
        allowNull: false
    },
    nomecomp:{
        type: sequelize.STRING(30),
        allowNull: false
    },
    quantcomp:{
        type: sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

Componentes.sync({force: false}).then(() => {});

module.exports = Componentes;