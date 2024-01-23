const express = require('express');
const db = require('../../app/conn');
const router = express.Router();
const midtransClient = require('midtrans-client');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM `table_boking`';
  db.query(query, (err, result) => {
    if (err) throw err;
    const data = JSON.stringify(result);
    res.send(data);
  });
});
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

router.post('/payment', (req, res) => {
  const { clienttoken, amout, orderid, name, email, telp } = req.body;
  console.log({ clienttoken, amout, orderid });
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-lZsaDfZ8_G7hD-GFHXH_LBEQ',
    clientKey: clienttoken,
  });

  let data = {
    transaction_details: {
      order_id: orderid,
      gross_amount: amout,
    },
    credit_card: {
      secure: true,
    },
  };
  snap
    .createTransaction(data)
    .then((token) => {
      res.json({ token: token, status: 200, message: 'Payment Token' });
    })
    .catch((err) => {
      console.log('err from payment', err);
    });
});

module.exports = router;
