const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripeRoute = require('./routes/stripeRoute');
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.use('/create-checkout-session', stripeRoute);

app.listen(port, () => {
    console.log("The server is running on port ", port);
})