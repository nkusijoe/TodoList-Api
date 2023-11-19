require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DATABASE: {
    URI: process.env.MONGODB_URI,
    OPTIONS: {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    },
  },
};