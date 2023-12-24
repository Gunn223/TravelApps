const express = require('express');
const router = express.Router();
const db = require('../../app/conn');
const { v4: uuidv4 } = require('uuid');
const byrcpt = require('bcrypt');
router.get('/:id', (req, res) => {
  const userId = req.params.id; // Ambil nilai 'id' dari parameter URL

  // Perbarui query untuk memfilter data berdasarkan id
  const query = 'SELECT * FROM users WHERE id_user = ?';

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Cek apakah hasil query tidak kosong
    if (result.length > 0) {
      const idToken = uuidv4();
      const data = JSON.stringify(result);
      res.send(data);
    } else {
      res.status(404).send('User not found');
    }
  });
});

router.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await byrcpt.compare(password, result[0].password);

    // console.log(isMatch, 'isMatch');

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = uuidv4();
    // ubah men
    console.log(token);
    const responseData = [{ user: result[0], token: token }];
    res.send(responseData);
  });
});

router.post('/addUser', async (req, res) => {
  const { username, lokasi, bio, sampul_bg, image_profile, email, phone_number, password } = req.body;
  const hashPass = await byrcpt.hash(password, 13);
  // const decode = await byrcpt.compare(password, hashPass);
  // console.log(decode, 'decode');
  // Validasi data (misalnya, pastikan bahwa username, email, dan phone_number sudah ada)
  if (!username || !email || !phone_number) {
    return res.status(400).json({ error: 'Mohon isi semua kolom yang diperlukan.' });
  }

  const query = `
     INSERT INTO users (username, lokasi, bio, sampul_bg, image_profile, email, phone_number,password)
     VALUES (?, ?, ?, ?, ?, ?, ?,?)
   `;

  db.query(query, [username, lokasi, bio, sampul_bg, image_profile, email, phone_number, hashPass], (err, result) => {
    if (err) {
      console.error('Gagal menambahkan pengguna:', err);
      return res.status(500).json({ error: 'Gagal menambahkan pengguna' });
    }

    const data = JSON.stringify(result);
    res.status(201).send(data); // Mengirimkan respons dengan kode status 201 Created
  });
});

// put
router.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const { username, lokasi, bio, sampul_bg, image_profile, email, phone_number } = req.body;

  const query = `UPDATE users SET username = ?, lokasi = ?, bio = ?, sampul_bg = ?, image_profile = ?, email = ?, phone_number = ? WHERE id_user = ?`;
  db.query(query, [username, lokasi, bio, sampul_bg, image_profile, email, phone_number, id], (err, result) => {
    if (err) throw err;
    return res.status(200).json({ data: result });
  });
});

module.exports = router;
