const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');

const contacts = require('./routes/contacts');

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/api/contacts', contacts);

app.listen(port, () => `Server is running on port ${port}`);