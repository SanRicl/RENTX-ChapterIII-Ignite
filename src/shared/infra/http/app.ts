import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import swaggerUi from 'swagger-ui-express';

import routes from '../../../routes';
import 'shared/container';
import typeormConnection from '../../../database';

const app = express();

typeormConnection();
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === 'production' ? undefined : false,
  })
);
app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

export default app;
