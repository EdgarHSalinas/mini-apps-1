const express = require('express');
const bodyParser = require('body-parser');
const json2csv = require('json2csv').parse;
const fields = ['firstName', 'lastName', 'county', 'city', 'role', 'sales'];
const opts = { fields }

const app = express();

app.use(express.static('./client'))
console.log('client ****');


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body);
  var json = req.body;
  try {
    const csv = json2csv(json, opts);
    if (csv) {
      res.status(status).send(body.csv)
    } 
  } catch (err) {
    console.error(err);
  }

  
 

  res.send('200');
 
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))

