require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./src/Routers/index');
const cors = require('cors')

const app = express();


app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`);
});

app.use(express.static('public'))
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(logger('dev'));
app.use(cors())

app.use(indexRouter);



