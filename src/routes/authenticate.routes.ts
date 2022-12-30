import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUserController = container.resolve(
  AuthenticateUserController,
);

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };
