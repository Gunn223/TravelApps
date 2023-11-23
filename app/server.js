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
  console.log(req.body);
  const query = `UPDATE users SET username = ?, lokasi = ?, bio = ?, sampul_bg = ?, image_profile = ?, email = ?, phone_number = ? WHERE id_user = ?`;
  db.query(query, [username, lokasi, bio, sampul_bg, image_profile, email, phone_number, id], (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
