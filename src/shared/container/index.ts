import IRiderizeDiscountsRepository from '@modules/riderize_discounts/repositories/implementations/IRiderizeDiscountsRepository';
import RiderizeDiscountsRepository from '@modules/riderize_discounts/repositories/RiderizeDiscountsRepository';
import IZipRangesRepository from '@modules/zip_ranges/repositories/implementations/IZipRangesRepository';
import ZipRangesRepository from '@modules/zip_ranges/repositories/ZipRangesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IZipRangesRepository>(
  'ZipRangesRepository',
  ZipRangesRepository
);

container.registerSingleton<IRiderizeDiscountsRepository>(
  'RiderizeDiscountsRepository',
  RiderizeDiscountsRepository
);
