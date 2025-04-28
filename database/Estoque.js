const sequelize = require("sequelize");
const con = require("./database");

const Estoque = con.define("tbestoques",{
    idest:{
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nomeest:{
        type: sequelize.STRING(50),
        allowNull: false
    },
    catest:{
        type: sequelize.STRING(20)
    },
    quantest:{
        type: sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

Estoque.sync({force: false}).then(() => {});

module.exports = Estoque;