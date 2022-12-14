import RiderizeDiscounts from '../../entities/RiderizeDiscounts';
import { inject, injectable } from 'tsyringe';

import IRiderizeDiscountsRepository from '../../repositories/implementations/IRiderizeDiscountsRepository';

interface IRequest {
  zip_destination_start: string;
  zip_destination_end: string;
  discount: number;
}

@injectable()
export default class CreateRiderizeDiscountsService {
  constructor(
    @inject('RiderizeDiscountsRepository')
    private riderizeDiscountsRepository: IRiderizeDiscountsRepository
  ) {}

  public async execute({
    zip_destination_start,
    zip_destination_end,
    discount,
  }: IRequest): Promise<RiderizeDiscounts> {
    const riderizeDiscountCreated =
      await this.riderizeDiscountsRepository.create({
        zip_destination_start,
        zip_destination_end,
        discount,
      });

    return riderizeDiscountCreated;
  }
}
