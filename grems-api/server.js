const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const { connectDB } = require('./config/db');

const customerRoute = require('./routes/customer');
const venderRoute = require('./routes/vendor');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const ordersRoute = require('./routes/orders');
const categoryRoute = require('./routes/category');
const braintreeRoute = require('./routes/braintree');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routing
app.use('/api/customer', customerRoute);
app.use('/api/vendor', venderRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/braintree', braintreeRoute);
app.use('/api/orders', ordersRoute);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
