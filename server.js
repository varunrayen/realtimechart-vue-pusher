const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const dotenv = require('dotenv');

dotenv.load();

const pusher = new Pusher ({
	app_id = PUSHER_APPID,
	key = PUSHER_KEY,
	secret = PUSHER_SECRET,
	cluster = PUSHER_CLUSTER,
	encrypted: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/app')));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log("Node Server is running on port ", app.get('port'));
});
