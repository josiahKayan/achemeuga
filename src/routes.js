const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);
routes.post('/spots/create',upload.single('thumbnail'),SpotController.store);
routes.post('/spots',SpotController.index);
routes.get('/dashboard',DashboardController.show);
routes.post('/spots/:spot_id/bookings',BookingController.store);



// routes.post('/spots',upload.array('thumbnail'),SpotController.store);




module.exports = routes;