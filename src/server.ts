import serverlessExpress from '@vendia/serverless-express';
import 'express-async-errors';
import { AppError } from 'errors/AppError';
import { NextFunction, Request, Response } from 'express';

import app from './shared/infra/http/app';

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'erro',
      message: `Internal server error - ${err.message}`,
    });
  }
);

export const handler =
  process.env.NODE_ENV === 'production'
    ? serverlessExpress({ app })
    : app.listen(6666, () => console.log('Server running'));

// export default handler;
