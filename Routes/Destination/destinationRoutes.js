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
  const id = req.params.id;
  const query = 'SELECT * FROM table_destination WHERE id_destination = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});

module.exports = router;
