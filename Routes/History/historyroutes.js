const express = require('express');
const db = require('../../app/conn');
const router = express.Router();

router.get('/', (req, res) => {
  const query = 'SELECT * FROM table_history';
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const data = JSON.stringify(result);
    res.send(data);
  });
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  const query = `
    SELECT th.*, tu.username as user_username
    FROM table_history th
    JOIN users tu ON th.user_id = tu.id_user
    WHERE th.user_id = ?
  `;

  db.query(query, [userId], (err, result) => {
    if (err) {
      // Handle the error, for example, by sending an error response
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    // Send the result as JSON response
    res.json(result);
  });
});

module.exports = router;
