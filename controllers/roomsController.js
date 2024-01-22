const Room = require('../models/Room');
const Student = require('../models/Student');
const { Op } = require('sequelize');

exports.createRoom = async (req, res) => {
    try {
      const newRoom = await Room.create(req.body);
      res.status(201).json(newRoom);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.searchRooms = async (req, res) => {
  try {
    const query = req.query.query.toLowerCase();

    const rooms = await Room.findAll({
      where: { name: { [Op.iLike]: '%' + query + '%' } }
    });

    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findOne({
      where: { id: req.params.id }
    });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const studentCount = await Student.count({
      where: { roomName: room.name }
    });

    const roomDetails = {
      ...room.get({ plain: true }),
      studentCount: studentCount
    };

    res.json(roomDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentsinRoom = async (req, res) => {
  try {
    const room = await Room.findOne({
      where: { id: req.params.id }
    });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const students = await Student.findAll({
      where: { roomName: room.name }
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
    try {
        const deleted = await Room.destroy({
          where: { id: req.params.id }
        });
        if (deleted) {
          res.status(204).send("Room deleted");
        } else {
          res.status(404).json({ error: 'Room not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};