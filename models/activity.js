const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activity  extends  Model {}

Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        active_minutes_day: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        favorite_toy: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        avg_sleep_day: {
            type: DataTypes.INTEGER,
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
        modelName: "Activity",
    }
);

module.exports = Activity;