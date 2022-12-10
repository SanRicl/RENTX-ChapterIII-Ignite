import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUsersDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      driver_license,
      email,
      name,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };
