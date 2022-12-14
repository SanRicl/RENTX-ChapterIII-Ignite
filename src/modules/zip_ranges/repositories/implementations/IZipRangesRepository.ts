import ZipCodeRange from '@modules/zip_ranges/entities/ZipCodeRange';
import ICalculateDeliveryPrice from '../../dtos/ICalculateDeliveryPriceDTO';

export default interface IZipRangesRepository {
  calculateDeliveryPrice(
    data: ICalculateDeliveryPrice
  ): Promise<ZipCodeRange | null>;
}
