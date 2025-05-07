// Imports the Sequelize class from the sequelize package.
const { Sequelize } = require('sequelize'); // It helps you interact with your PostgreSQL database using JavaScript instead of raw SQL.
require('dotenv').config(); // Loads environment variables from your .env file (like DB_NAME, DB_USER, etc.) into process.env so your app can access them securely.

const sequelize = new Sequelize( // Creates a Sequelize instance called sequelize, which connects to your database.
    process.env.DB_NAME, // name of the database you're connecting to
    process.env.DB_USER, // your PostgreSQL username
    process.env.DB_PASSWORD || null, // your password (or null if not set)
    {
      host: process.env.DB_HOST, 
      port: process.env.DB_PORT,
      dialect: "postgres", // tells Sequelize which database type you’re using ('postgres')
      logging: false, // disables Sequelize’s default SQL logging (keeps console clean)
      timezone: process.env.TZ || "UTC",
    }
  );

sequelize
    .authenticate()
    .then(() => console.log('✅ DB Connected'))
    .catch ((err) => console.error('❌ Database connection failed:', err));

  module.exports = sequelize; // Exports the sequelize instance so other files (like your models and server) can use the DB connection.