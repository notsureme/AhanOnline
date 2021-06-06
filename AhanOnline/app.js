const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');//Ejs Was the engine to perform a faster UI for showing application
app.set('views', 'views');//Views and pages folder is settled

const adminRoutes = require('./routes/admin');//Will manage all admin related requests routes here
const shopRoutes = require('./routes/shop');// Will manage all shop related requests routes here

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));//we access css and js for handling pages through this address in PUBLIC folder

app.use('/admin', adminRoutes);// if user access through user handle routes from here
app.use(shopRoutes);

app.use(errorController.get404);// if unexpected page requested show error here, we could enhance error handle via errorController

app.listen(3000);
