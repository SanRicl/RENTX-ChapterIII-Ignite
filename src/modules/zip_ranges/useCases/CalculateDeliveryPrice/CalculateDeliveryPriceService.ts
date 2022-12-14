import { inject, injectable } from 'tsyringe';

import IZipRangesRepository from '../../repositories/implementations/IZipRangesRepository';
import IRiderizeDiscountsRepository from '../../../riderize_discounts/repositories/implementations/IRiderizeDiscountsRepository';
import { AppError } from 'errors/AppError';
import ZipCodeRange from '@modules/zip_ranges/entities/ZipCodeRange';

interface IRequest {
  zip_origin: string;
  zip_destination: string;
  number_service: string;
  weight: number;
  apply_riderize_discount?: boolean;
}

@injectable()
export default class CalculateDeliveryPriceService {
  constructor(
    @inject('ZipRangesRepository')
    private zipRangesRepository: IZipRangesRepository,

    @inject('RiderizeDiscountsRepository')
    private riderizeDiscountsRepository: IRiderizeDiscountsRepository
  ) {}

  public async execute({
    number_service,
    weight,
    zip_destination,
    zip_origin,
    apply_riderize_discount,
  }: IRequest): Promise<ZipCodeRange> {
    const zipRangeFound = await this.zipRangesRepository.calculateDeliveryPrice(
      {
        number_service,
        weight,
        zip_destination,
        zip_origin,
      }
    );

    const discount =
      await this.riderizeDiscountsRepository.findDiscountByDestination(
        zip_destination
      );
    const discountApply = (100 - Number(discount)) / 100;

    if (!zipRangeFound) {
      throw new AppError(
        'Não foi possível encontrar uma faixa para os ceps passados.'
      );
    }

    if (zipRangeFound && apply_riderize_discount && discount) {
      zipRangeFound.value = zipRangeFound.value * discountApply;
    }

    return zipRangeFound;
  }
}
