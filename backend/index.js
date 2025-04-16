const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: '192.168.1.1',
  database: 'perfumes',
  password: 'postgresadmin', // 👈 make sure this is correct
  port: 5432,
});

// ✅ Test Route for root
app.get('/', (req, res) => {
  res.send('🛠️ API is running! Try /products');
});

// ✅ Get all products
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching products:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Start the server
app.listen(3001, () => {
  console.log('✅ Backend server running on http://localhost:3001');
});
