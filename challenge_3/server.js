const express = require('express');

const app = express();

// app.set('port', process.env.PORT || 3000);
var port = process.env.PORT || 3000;
// app.get('/', (req, res) => res.send('Checkout'));

app.use(express.static('public'));

app.listen(port, () => console.log('Listening on Port 3000'));

