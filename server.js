const express = require('express');
const cors = require('cors');

const app = express();
const roomsRoutes = require('./routes/roomsRoutes');
const studentsRoutes = require('./routes/studentsRoutes');

const sequelize = require('./database');
const Room = require('./models/Room');
const Student = require('./models/Student');

app.use(express.json());
app.use(cors());
app.use('/rooms', roomsRoutes);
app.use('/students', studentsRoutes);

sequelize.sync({ force: false }) // { force: true } drops the table if it already exists
  .then(() => {
    app.listen(4000, () => {
      console.log('Server is running on port 4000.')
    });
  })
  .catch(err => {
    console.error('An error occurred while syncing the database:', err);
  });


  