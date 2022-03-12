const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log('connected to db!'));

// Middleware
app.use(express.json());

// import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

// Route middlewares
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(3000, ()=> console.log('Server up and running'));
