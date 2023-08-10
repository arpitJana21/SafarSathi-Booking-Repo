const express = require('express');
const tourController = require('../Controllers/tourController');
const authController = require('../Controllers/authController');

const tourRouter = express.Router();

tourRouter
    .route('/')
    .get(authController.protect, tourController.getAllTours)
    .post(tourController.createTour);

tourRouter
    .route('/top-5-cheap')
    .get(tourController.aliasTopTours, tourController.getAllTours);

tourRouter.route('/stats').get(tourController.getTourStats);
tourRouter.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

tourRouter
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = { tourRouter };
