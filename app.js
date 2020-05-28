const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const cors = require('cors')
const app = express();

app.use(cors());

app.use(express.json({ extended: true}));
const PORT = process.env.PORT || 80;

app.use(express.static(__dirname));
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'client', 'build')));

async function start() {
	try {
		// await mongoose.connect(config.get('mongoUri'), {
		// 	useNewUrlParser: true,
		// 	useUnifiedTopology: true,
		// 	useCreateIndex: true
		// })
		app.get('*', function (req, res) {
			res.sendFile(path.join(__dirname, 'client', 'build','index.html'));
		});
		app.listen(PORT, () => console.log('App has been started...' + PORT))
	} catch (e) {
		console.log('Server Error ' + e);
		process.exit(1);
	}
}

start();