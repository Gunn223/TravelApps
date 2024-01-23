const express = require('express');
const router = express.Router();
const db = require('../../app/conn');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM table_destination';
  db.query(query, (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});
router.get('/:id', (req, res) => {
  const id_destination = req.params.id;
  const query = 'SELECT * FROM table_destination WHERE id_destination = ?';
  db.query(query, [id_destination], (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});

router.post('/add', (req, res) => {
  const { title, price, date, kategori, description, image, facilities, kuota } = req.body;
  console.log(req.body);

  const query = `
    INSERT INTO table_destination (title, price, date, kategori, description, image, facilities, kuota)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [title, price, date, kategori, description, image, facilities, kuota], (err, result) => {
    if (err) {
      console.error('Error adding destination:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Destination added successfully' });
    }
  });
});
router.put('/update/:id', (req, res) => {
  const destinationId = req.params.id;
  const { title, price, date, kategori, description, image, facilities, kuota } = req.body;

  const query = `
    UPDATE table_destination
    SET title=?, price=?, date=?, kategori=?, description=?, image=?, facilities=?, kuota=?
    WHERE id=?
  `;

  db.query(
    query,
    [title, price, date, kategori, description, image, facilities, kuota, destinationId],
    (err, result) => {
      if (err) {
        console.error('Error updating destination:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Destination updated successfully' });
      }
    },
  );
});
router.delete('/delete/:id', (req, res) => {
  const destinationId = req.params.id;

  const query = `
    DELETE FROM table_destination
    WHERE id_destination=?
  `;

  db.query(query, [destinationId], (err, result) => {
    if (err) {
      console.error('Error deleting destination:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Destination deleted successfully' });
    }
  });
});

module.exports = router;
