import { getConnection, getRepository, Repository } from 'typeorm';

import IZipRangesRepository from './implementations/IZipRangesRepository';
import ICalculateDeliveryPrice from '../dtos/ICalculateDeliveryPriceDTO';
import { AppError } from '../../../errors/AppError';
import ZipCodeRange from '../entities/ZipCodeRange';

export default class ZipRangesRepository implements IZipRangesRepository {
  private ormRepository: Repository<ZipCodeRange>;

  constructor() {
    this.ormRepository = getRepository(ZipCodeRange);
  }
  public async calculateDeliveryPrice({
    zip_origin,
    weight,
    zip_destination,
    number_service,
  }: ICalculateDeliveryPrice): Promise<ZipCodeRange | null> {
    try {

      const deliveryPriceCalculated = await this.ormRepository.query(
        `SELECT *
           FROM zip_ranges_brazil
          WHERE weight = $1
            AND number_service = $2
            AND $3::INTEGER BETWEEN zip_origin_start::INTEGER
            AND zip_origin_end::INTEGER
            AND $4::INTEGER BETWEEN zip_destination_start::INTEGER
            AND zip_destination_end::INTEGER`,
        [weight, number_service, zip_origin, zip_destination]
      );

      return deliveryPriceCalculated[0];
    } catch (err: any) {
      throw new AppError(err.message);
    }
  }
}
