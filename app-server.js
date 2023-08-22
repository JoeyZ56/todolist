const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

app.use(express.json()); // req.body
app.use((req, res, next) => {
	res.locals.data = {};
	next();
});
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/todos', require('./routes/api/todos'));
// http://localhost:8000/api/todos/completed
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
