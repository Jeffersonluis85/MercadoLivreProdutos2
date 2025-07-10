const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', authRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
