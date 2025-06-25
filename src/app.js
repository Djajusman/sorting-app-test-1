require('dotenv').config();
const express = require('express');
const app = express();
const logicRoutes = require('./routes/logicRoutes');

app.use(express.json());
app.use('/api', logicRoutes);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
