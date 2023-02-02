const Sequelize = require('sequelize');

const sequelize = new Sequelize({ // Criando Instancia
    dialect: 'sqlite',       // Qual banco sera utilizado
    storage: 'db/app.db'     // Onde esta o banco
});

// importar o banco de dados externo
module.exports = sequelize