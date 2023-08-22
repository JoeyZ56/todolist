// files to run (only works with common js)
require('dotenv').config();
require('./config/database');

const PORT = process.env.PORT || 8001;

const app = require('./app-server');

app.use('/api/todos', require('./routes/api/todos'));

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}. We are up and running`);
});
