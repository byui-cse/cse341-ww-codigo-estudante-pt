const routes = require('express').Router(); 
const contactsController = require('../controllers/contacts'); // Import the new contacts controller

routes.get('/contacts', contactsController.getAll);

routes.get('/contacts/:id', contactsController.getSingle);

module.exports = routes;