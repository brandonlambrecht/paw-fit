const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Health extends Model {}

Health.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        health_vaccination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        health_neuter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        health_diseases: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Health",
    }
);

module.exports = Health;