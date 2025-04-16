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
// 🔍 Get all products by type (e.g., men or women)
app.get('/products/:type', async (req, res) => {
  const { type } = req.params;


// ✅ Get product by type and id
app.get('/products/:type/:id', async (req, res) => {
  const { type, id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE type = $1 AND id = $2',
      [type, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
  // Validate type
  if (type !== 'men' && type !== 'women') {
    return res.status(400).json({ error: 'Invalid product type' });
  }

  try {
    const result = await pool.query('SELECT * FROM products WHERE type = $1', [type]);
    res.json(result.rows);
  } catch (err) {
    console.error(`❌ Failed to fetch ${type} products:`, err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔍 Get a single product by type and id
app.get('/products/:type/:id', async (req, res) => {
  const { type, id } = req.params;

  // Validate type
  if (type !== 'men' && type !== 'women') {
    return res.status(400).json({ error: 'Invalid product type' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE type = $1 AND id = $2',
      [type, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Failed to fetch product by ID:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// // ✅ Get men products
// app.get('/products/men', async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM products WHERE type = 'men'");
//     res.json(result.rows);
//     console.log('🟢 /products/men called');
//   } catch (err) {
//     console.error('❌ Failed to fetch men products:', err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // ✅ Get men products
// app.get('/products/women', async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM products WHERE type = 'women'");
//     res.json(result.rows);
//   } catch (err) {
//     console.error('❌ Failed to fetch men products:', err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

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
