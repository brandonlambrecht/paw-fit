const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Diet extends Model {}

Diet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        food_amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validator: {
                isDecimal: true,
            },
        },
        food_favorite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        food_allergies: {
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
        modelName: "Diet",
    }
);


module.exports = Diet;