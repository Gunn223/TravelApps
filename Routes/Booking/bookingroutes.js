const express = require('express');
const db = require('../../app/conn');
const router = express.Router();
router.post('/addBooking', (req, res) => {
  const { date_boking, status_destination, destination_id, user_id } = req.body;
  console.log(req.body);
  const bookingQuery = `
    INSERT INTO table_boking (date_boking, status_destination, destination_id, user_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(bookingQuery, [date_boking, status_destination, destination_id, user_id], (err, bookingResult) => {
    if (err) {
      console.error('Gagal menambahkan booking:', err);
      return res.status(500).json({ status: 500, error: 'Gagal menambahkan booking', message: err.sqlMessage });
    }

    const insertedBookingId = bookingResult.insertId;

    const historyQuery = `
      INSERT INTO table_history (
        user_id, 
        username,
        date_booking, 
        status_destination, 
        destination_id, 
        title, 
        price, 
        action_type, 
        action_date
      )
      SELECT 
        tb.user_id, 
        tu.username, 
        tb.date_boking, 
        tb.status_destination, 
        tb.destination_id, 
        td.title,  
        td.price,  
        'berjalan' AS action_type, 
        NOW() AS action_date
      FROM 
        table_boking tb
      JOIN
        users tu ON tb.user_id = tu.id_user
      JOIN
        table_destination td ON tb.destination_id = td.id_destination
      WHERE 
        tb.id_boking = ?;
    `;

    db.query(historyQuery, [insertedBookingId], (historyErr, historyResult) => {
      if (historyErr) {
        console.error('Gagal menambahkan booking history:', historyErr);
        return res
          .status(500)
          .json({ status: 500, error: 'Gagal menambahkan booking history', eror: historyErr.sqlMessage });
      }

      const updateQuery = `
        UPDATE table_destination
        SET kuota = kuota - 1
        WHERE id_destination = (SELECT destination_id FROM table_boking WHERE id_boking = ?);
      `;

      db.query(updateQuery, [insertedBookingId], (updateErr, updateResult) => {
        if (updateErr) {
          console.error('Gagal mengupdate kuota:', updateErr);
          return res.status(500).json({ error: 'Gagal mengupdate kuota' });
        }

        // console.log(historyResult, updateResult);

        return res.status(201).json({
          statuscode: 201,
          message: 'Booking berhasil ditambahkan',
          history: historyResult,
          update: updateResult,
        });
      });
    });
  });
});

module.exports = router;
