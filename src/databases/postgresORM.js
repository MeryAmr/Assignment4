const { Sequelize } = require('sequelize');
const sequalize = new Sequelize('taskgres', 'ziusudra', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});
module.exports = sequalize;