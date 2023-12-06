const express = require('express');
const db = require('../../app/conn');
const router = express.Router();
router.post('/addBooking', (req, res) => {
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
    res.status(201).send(data);

  });
});

module.exports = router;
