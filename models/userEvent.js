const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userEvent extends Model { }

userEvent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'event',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userEvent'
    }
);

module.exports = userEvent;