const express = require('express');
const db = require('../../app/conn');
const router = express.Router();

// router.use((req, res, next) => {
//   const query = '';
//   db.query(query, (err, res) => {});
//   res.send('user not found');
// });
// belum selesai

router.get('/', (req, res) => {
  res.send('midlleware route');
});

module.exports = router;
