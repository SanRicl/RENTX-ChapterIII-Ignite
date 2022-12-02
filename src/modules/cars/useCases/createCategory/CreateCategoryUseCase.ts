import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ICreateRepositoryDTO } from '../../repositories/implementations/ICategoriesRepository';

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name, description }: ICreateRepositoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('Category already exists!');

    this.categoriesRepository.create({ description, name });
  }
}

export { CreateCategoryUseCase };
