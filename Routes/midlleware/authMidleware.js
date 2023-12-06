const express = require('express');

const router = express.Router();



// belum selesai
router.get('/', (req, res) => {
  res.send('midlleware route');
});

module.exports = router;
