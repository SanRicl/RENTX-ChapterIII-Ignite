import ICreateRiderizeDiscountDTO from '../dtos/ICreateRiderizeDiscountDTO';
import IRiderizeDiscountsRepository from './implementations/IRiderizeDiscountsRepository';
import RiderizeDiscounts from '../entities/RiderizeDiscounts';
import { getRepository, Repository } from 'typeorm';

export default class RiderizeDiscountsRepository
  implements IRiderizeDiscountsRepository
{
  private ormRepository: Repository<RiderizeDiscounts>;

  constructor() {
    this.ormRepository = getRepository(RiderizeDiscounts);
  }

  public async create({
    zip_destination_start,
    zip_destination_end,
    discount,
  }: ICreateRiderizeDiscountDTO): Promise<RiderizeDiscounts> {
    const riderizeDiscountCreated = this.ormRepository.create({
      zip_destination_start,
      zip_destination_end,
      discount,
    });

    return riderizeDiscountCreated;
  }

  public async findDiscountByDestination(
    zip_destination: string
  ): Promise<Number> {
    const riderizeDiscount = await this.ormRepository.findOne({
      where: {
        zip_destination_start: {
          lte: zip_destination,
        },
        zip_destination_end: {
          gte: zip_destination,
        },
      },
    });

    return riderizeDiscount?.discount || 0;
  }
}
