const express = require('express');
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');
const port = process.env.PORT || 9000;
app.set('trust proxy', true);
const cors = require('cors');

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Home');
});

app.use('/history', require('../Routes/History/historyroutes'));
app.use('/auth', require('../Routes/midlleware/authMidleware'));
app.use('/users', require('../Routes/User/userRoutes'));
app.use('/destination', require('../Routes/Destination/destinationRoutes'));
app.use('/booking', require('../Routes/Booking/bookingroutes'));

const server = app.listen(port, 3000, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
