const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Room = sequelize.define('Room', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isPositiveInteger(val) {
                if (val < 1) {
                    throw new Error('Capacity must be a positive integer');
                }
        }}
    },
  });

module.exports = Room;