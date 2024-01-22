const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('schooldb', 'postgres', 'pass', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
