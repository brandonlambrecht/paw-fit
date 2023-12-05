const { Model, DataTypes } = require('sequelize');
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
        health_neurte: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        health_diseases: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        animal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Animal',
                key: 'id',
            },
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