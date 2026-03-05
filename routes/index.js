const routes = require('express').Router();
const controller = require('../controller/');

routes.get('/', controller.homeRoute);

module.exports = routes;