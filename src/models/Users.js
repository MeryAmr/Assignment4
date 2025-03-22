const { DataTypes } = require('sequelize');
const sequelize = require('../databases/postgresORM');
const User = sequelize.define(
    'User',
    {
        uid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false},
        email: { type: DataTypes.STRING, allowNull: false },
    });
module.exports = User;