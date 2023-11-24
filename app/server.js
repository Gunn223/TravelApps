const express = require('express');
const db = require('./conn');
const app = express();
var methodOverride = require('method-override');
const port = 3000;

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.urlencoded({ extended: true }));

// get
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});
app.get('/destination', (req, res) => {
  const query = 'SELECT * FROM table_destination';
  db.query(query, (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});
app.get('/', (req, res) => {
  res.send('Hello Home');
});

// put
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { username, lokasi, bio, sampul_bg, image_profile, email, phone_number } = req.body;
  //   data dari body

  const query = `UPDATE users SET username = ?, lokasi = ?, bio = ?, sampul_bg = ?, image_profile = ?, email = ?, phone_number = ? WHERE id_user = ?`;
  db.query(query, [username, lokasi, bio, sampul_bg, image_profile, email, phone_number, id], (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});
// create
// post
app.post('/addUser', (req, res) => {
  const { username, lokasi, bio, sampul_bg, image_profile, email, phone_number, password } = req.body;

  // Validasi data (misalnya, pastikan bahwa username, email, dan phone_number sudah ada)
  if (!username || !email || !phone_number) {
    return res.status(400).json({ error: 'Mohon isi semua kolom yang diperlukan.' });
  }

  const query = `
    INSERT INTO users (username, lokasi, bio, sampul_bg, image_profile, email, phone_number,password)
    VALUES (?, ?, ?, ?, ?, ?, ?,?)
  `;

  db.query(query, [username, lokasi, bio, sampul_bg, image_profile, email, phone_number, password], (err, result) => {
    if (err) {
      console.error('Gagal menambahkan pengguna:', err);
      return res.status(500).json({ error: 'Gagal menambahkan pengguna' });
    }

    const data = JSON.stringify(result);
    res.status(201).send(data); // Mengirimkan respons dengan kode status 201 Created
  });
});

app.post('/booking', (req, res) => {
  const { date_boking, status_destination, destination_id, user_id } = req.body;

  const query = `
    INSERT INTO table_boking (date_boking, status_destination, destination_id, user_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [date_boking, status_destination, destination_id, user_id], (err, result) => {
    if (err) {
      console.error('Gagal menambahkan booking:', err);
      return res.status(500).json({ error: 'Gagal menambahkan booking' });
    }

    const data = JSON.stringify(result);
    res.status(201).send(data); // Mengirimkan respons dengan kode status 201 Created
  });
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
