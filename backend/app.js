const express = require('express');
const app = express();
const cors = require('cors');



// Middleware
app.use(cors({
    origin: 'https://rushikersclub-frontend.azurewebsites.net', // Allow requests from your frontend
    credentials: true, // Include cookies in requests
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  }));

const cookieParser  = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(cookieParser());

app.get('/api/hello', (req, res) => {
    res.send('Hello from express');
});


// import routes
const auth = require('./routes/auth');
const events = require('./routes/events');
const admin = require('./routes/admin');
const magazine = require('./routes/magazine');

app.use('/api/v1', auth);
app.use('/api/v1/events', events);
app.use('/api/v1/admin', admin);
app.use('/api/v1/magazine', magazine);

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});


app.use(errorMiddleware);


module.exports = app;
