const Student = require('../models/Student');
const { Op } = require('sequelize');

exports.createStudent = async (req, res) => {
  try {
    let siblingGroupId = req.body.siblingId;

    const newStudent = await Student.create({ ...req.body, siblingGroupId });

    if (!siblingGroupId) {
      newStudent.siblingGroupId = newStudent.id;
      await newStudent.save();
    }

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getStudent = async (req, res) => {
  try {
      const student = await Student.findOne({
        where: { id: req.params.id }
      });
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

exports.searchStudents = async (req, res) => {
  try {
    const terms = req.query.query.toLowerCase().split(' ');

    const students = await Student.findAll({
      where: {
        [Op.or]: terms.map(term => ({
          [Op.or]: [
            { firstName: { [Op.iLike]: '%' + term + '%' } },
            { lastName: { [Op.iLike]: '%' + term + '%' } }
          ]
        }))
      }
    });

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.destroy({
          where: { id: req.params.id }
        });
        if (deleted) {
          res.status(204).send("Student deleted");
        } else {
          res.status(404).json({ error: 'Student not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getSiblings = async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.id }
    });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const siblings = await Student.findAll({
      where: { 
        siblingGroupId: student.siblingGroupId,
        id: {
          [Op.ne]: student.id // Exclude the student's id
        }
      }
    });
    res.json(siblings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}