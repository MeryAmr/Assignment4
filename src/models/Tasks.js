const { DataTypes } = require('sequelize');
const sequelize = require('../databases/postgresORM');
const Task = sequelize.define(
    'Task',
    {
        tid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: {type: DataTypes.STRING, allowNull: false},
        description: { type: DataTypes.STRING, allowNull: false },
        deadline: { type: DataTypes.DATE, allowNull: false },
        priority: { type: DataTypes.INTEGER, allowNull: false },
    });
module.exports = Task;