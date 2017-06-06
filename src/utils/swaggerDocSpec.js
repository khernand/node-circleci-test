import path from 'path';
import swagger from 'swagger-jsdoc';

const swaggerDefinition = {
  info: {
    title: 'Demo Node.js REST API',
    version: '1.0.0',
    description: 'Demo Node.js REST API',
  }
};

const options = {
  swaggerDefinition,
  apis: [path.resolve('src/routes/**/*.js'), path.resolve('src/models/**/*.js')],
};

const swaggerSpec = swagger(options);

export default swaggerSpec;
