import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../database/errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      'e2f4fb6db2ef7c98157d0c5f953d415e',
    ) as IPayload;

    const userRepository = new UsersRepository();
    const userExists = userRepository.findById(user_id);

    if (!userExists) throw new AppError('User does not exists', 401);
  } catch (error) {
    throw new AppError('Invalid token.', 401);
  }
  next();
}
