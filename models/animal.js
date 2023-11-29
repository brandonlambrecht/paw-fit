const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        animal_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_gender: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        pet_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validator: {
                isNumeric: true,
            },
        },
        pet_color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_weight: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validator: {
                isDecimal: true,   
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Animal",
    }
);

module.exports = Animal;
