const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get(
  '/',
  /* #swagger.tags = ['Temples']
     #swagger.summary = 'Get all temples'
     #swagger.description = 'Returns all temples when a valid apiKey header is provided.'
     #swagger.parameters['apiKey'] = {
        in: 'header',
        description: 'API key required for GET routes',
        required: true,
        type: 'string'
     }
     #swagger.responses[200] = {
        description: 'List of temples',
        schema: [{
          temple_id: 1,
          name: 'Kampala Uganda Temple',
          location: 'Kampala, Uganda',
          dedicated: '2026-03-28',
          additionalInfo: true
        }]
     }
  */
  temples.findAll
);

routes.get(
  '/:temple_id',
  /* #swagger.tags = ['Temples']
     #swagger.summary = 'Get one temple by temple_id'
     #swagger.description = 'Returns a single temple when a valid apiKey header is provided.'
     #swagger.parameters['apiKey'] = {
        in: 'header',
        description: 'API key required for GET routes',
        required: true,
        type: 'string'
     }
     #swagger.parameters['temple_id'] = {
        in: 'path',
        description: 'Temple ID',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.responses[200] = {
        description: 'Temple found',
        schema: {
          temple_id: 1,
          name: 'Kampala Uganda Temple',
          description: 'A temple in Kampala',
          location: 'Kampala, Uganda',
          dedicated: '2026-03-28',
          additionalInfo: true
        }
     }
     #swagger.responses[404] = {
        description: 'Temple not found'
     }
  */
  temples.findOne
);

routes.post(
  '/',
  /* #swagger.tags = ['Temples']
     #swagger.summary = 'Create a temple'
     #swagger.description = 'Creates a new temple record.'
     #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Temple data',
        required: true,
        schema: {
          temple_id: 1,
          name: 'Kampala Uganda Temple',
          description: 'A temple in Kampala',
          location: 'Kampala, Uganda',
          dedicated: '2026-03-28',
          additionalInfo: true
        }
     }
     #swagger.responses[200] = {
        description: 'Temple created successfully'
     }
     #swagger.responses[400] = {
        description: 'Invalid request body'
     }
  */
  temples.create
);

routes.put(
  '/:temple_id',
  /* #swagger.tags = ['Temples']
     #swagger.summary = 'Update a temple by temple_id'
     #swagger.description = 'Updates an existing temple record.'
     #swagger.parameters['temple_id'] = {
        in: 'path',
        description: 'Temple ID',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Temple fields to update',
        required: true,
        schema: {
          name: 'Updated Kampala Uganda Temple',
          description: 'Updated description',
          location: 'Kampala, Uganda',
          dedicated: '2026-03-28',
          additionalInfo: true
        }
     }
     #swagger.responses[200] = {
        description: 'Temple updated successfully'
     }
     #swagger.responses[404] = {
        description: 'Temple not found'
     }
  */
  temples.update
);

routes.delete(
  '/:temple_id',
  /* #swagger.tags = ['Temples']
     #swagger.summary = 'Delete a temple by temple_id'
     #swagger.description = 'Deletes a temple record.'
     #swagger.parameters['temple_id'] = {
        in: 'path',
        description: 'Temple ID',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.responses[200] = {
        description: 'Temple deleted successfully'
     }
     #swagger.responses[404] = {
        description: 'Temple not found'
     }
  */
  temples.delete
);

module.exports = routes;
