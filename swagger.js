const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'CSE341 Temple API documentation',
  },
  host: 'localhost:8080',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'apiKey',
      description: 'Required for GET temple routes',
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './routes/temple.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);