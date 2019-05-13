import express from "express";
import AuthRoute from './routes/auth.route';

const app = express();
var port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require('./config/mongoose.config');
var swagger = require('./routes/swagger.route');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const authRoute = new AuthRoute();
authRoute.authRoute(app);

app.use('/', swagger);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;