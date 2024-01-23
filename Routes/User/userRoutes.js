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
    const responseData = [{ user: result[0], token: token, clienttoken: 'SB-Mid-client-pb78hw7xCh1fg48O' }];

    res.send(responseData);
  });
});

router.post('/addUser', async (req, res) => {
  const { username, lokasi, bio, sampul_bg, image_profile, email, phone_number, password } = req.body;
  const hashPass = await byrcpt.hash(password, 13);

  // Validasi data (misalnya, pastikan bahwa username, email, dan phone_number sudah ada)
  if (!username || !email || !phone_number) {
    return res.status(400).json({ error: 'Mohon isi semua kolom yang diperlukan.' });
  }

  // Fungsi untuk memeriksa apakah email sudah terdaftar
  const checkIfEmailExists = (email, callback) => {
    const query = `
      SELECT * FROM users
      WHERE email = ?
    `;

    db.query(query, [email], (err, result) => {
      if (err) {
        console.error('Error checking email:', err);
        return callback(err, null);
      }

      // Mengembalikan hasil query (bisa null jika email belum terdaftar)
      callback(null, result);
    });
  };

  // Pada bagian sebelum query penambahan pengguna
  checkIfEmailExists(email, (err, result) => {
    if (err) {
      console.error('Error checking email existence:', err);
      return res.status(500).json({ error: 'Gagal memeriksa email' });
    }

    // Jika hasil query tidak kosong, email sudah terdaftar
    if (result && result.length > 0) {
      return res.status(400).json({ error: 'Email sudah terdaftar' });
    }

    // Jika email belum terdaftar, lanjutkan dengan query penambahan pengguna
    const insertQuery = `
      INSERT INTO users (username, lokasi, bio, sampul_bg, image_profile, email, phone_number, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [username, lokasi, bio, sampul_bg, image_profile, email, phone_number, hashPass],
      (insertErr, insertResult) => {
        if (insertErr) {
          console.error('Gagal menambahkan pengguna:', insertErr);
          return res.status(500).json({ error: 'Gagal menambahkan pengguna' });
        }

        // Sukses menambahkan pengguna
        return res.status(201).json({ message: 'Pengguna berhasil ditambahkan' });
      },
    );
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
