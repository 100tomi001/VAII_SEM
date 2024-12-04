const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error synchronizing database:', err));


app.use('/posts', postRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
