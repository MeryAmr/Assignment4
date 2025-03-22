const sequelize = require('../databases/postgresORM');
const User = require('./Users');
const Task = require('./Tasks');

module.exports = { sequelize, User, Task };