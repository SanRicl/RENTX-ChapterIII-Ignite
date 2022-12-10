import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/implementations/ISpecificationsRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UserRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
