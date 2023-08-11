const express = require('express');
const app = express();
//path is a prebuilt in node module
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//middleware
app.use(express.json());
app.use((_, res, next) => {
	//a place to store our local data(dont put directly in the locals add a variable"data" to store inside locals)
	res.locals.data = {};
	next();
});

app.use(logger('dev'));
// "__dirname" is a built in variable
// "path.join" is to update the '/'s' for window users(sence window users use '\' instead of '/')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/todos', require('./routes/api/todos'));

app.get('*', (_, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
