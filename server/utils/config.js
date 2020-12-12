module.exports = {
  serverPort: process.env.SERVER_PORT,
  mongoUrl: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}?authSource=admin`,
};
