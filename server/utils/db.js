const mongoose = require('mongoose');

const config = require('./config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connect = async () => {
  try {
    await mongoose.connect(config.mongoUrl, options);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error: ', error);
  }
};

module.exports = {
  connect,
};
