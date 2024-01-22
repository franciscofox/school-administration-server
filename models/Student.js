const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Room = require('./Room');

const Student = sequelize.define('Student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isAge(val) {
                if (val < 1 || val > 100) {
                    throw new Error('Age must be an integer between 1 and 100');
                }
            }
        }
    },
    roomName: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Room,
            key: 'name'
        }
    },
    siblingGroupId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Students',
          key: 'id', 
        }
      }
});

Student.addHook('beforeCreate', async (student) => {
    const room = await Room.findOne({ where: { name: student.roomName } });
    if (!room) {
        throw new Error('roomName must be in Rooms table');
    }
    });

Room.hasMany(Student, { foreignKey: 'roomName', sourceKey: 'name' });
Student.belongsTo(Room, { foreignKey: 'roomName', targetKey: 'name' });

Student.hasMany(Student, {
    as: 'Siblings',
    foreignKey: 'siblingGroupId',
    useJunctionTable: false
  });

module.exports = Student;