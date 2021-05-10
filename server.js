const express = require('express');
const bodyParser = require('body-parser');
const loginUser = require('./server/routes/auth.route')

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

require('./server/routes/auth.route')(app);
require('./server/routes/get-products.route')(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
});
