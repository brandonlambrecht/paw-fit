const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

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
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
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
