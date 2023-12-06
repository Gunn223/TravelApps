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

module.exports = router;
