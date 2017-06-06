import 'babel-polyfill';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { errorHandler, swaggerDocSpec } from './utils';
import routes from './routes';
import config from './config';

const app = express();

app.use('/', routes);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocSpec));
app.use(errorHandler); // Error Handler Middleware
app.disable('x-powered-by'); // Remove default Express header

const port = config.port;
app.listen(port, () => {
  console.log(`App is listening on ${port}.`);
});

export default app;
