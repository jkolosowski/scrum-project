const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const users = require('./routes/users');
const polls = require('./routes/polls');

app.use(express.json());
app.use(cors());
app.use('/users', users);
users.use('/:userId/poll', polls);

const dbConnData = {
  username: process.env.MONGO_USERNAME_ADMIN,
  password: process.env.MONGO_PASSWORD_ADMIN,
  port: process.env.PORT
};

mongoose
  .connect(`mongodb+srv://${dbConnData.username}:${dbConnData.password}@clustermain.dxauc.mongodb.net/db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = dbConnData.port;
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB', error));