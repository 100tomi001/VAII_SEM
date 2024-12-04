const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('forum', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});


sequelize.authenticate()
  .then(() => console.log('Connection to PostgreSQL successful!'))
  .catch((err) => console.error('Unable to connect to PostgreSQL:', err));

module.exports = sequelize;
