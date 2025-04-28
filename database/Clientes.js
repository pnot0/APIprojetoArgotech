const sequelize = require("sequelize");
const con = require("./database");

const Clientes = con.define("tbclientes",{
    idcli:{
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nomecli:{
        type: sequelize.STRING(50),
        allowNull: false
    },
    endcli:{
        type: sequelize.STRING(100)
    },
    telcli:{
        type: sequelize.STRING(12),
        allowNull: false
    },
    emailcli:{
        type: sequelize.STRING(30)
    }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

Clientes.sync({force: false}).then(() => {});

module.exports = Clientes;