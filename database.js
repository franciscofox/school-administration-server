// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('schooldb', 'postgres', 'pass', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// module.exports = sequelize;


const { Sequelize } = require('sequelize');

const dbName = 'schooldb';
const dbUser = 'postgres'; 
const dbPass = 'password'; 
const dbHost = 'schooldb.czyga4gsq172.us-east-1.rds.amazonaws.com';

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;
