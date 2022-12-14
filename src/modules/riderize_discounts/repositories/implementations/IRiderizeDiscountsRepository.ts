
import RiderizeDiscounts from '@modules/riderize_discounts/entities/RiderizeDiscounts';
import ICreateRiderizeDiscountDTO from '../../dtos/ICreateRiderizeDiscountDTO';

export default interface IRiderizeDiscountsRepository {
  create(data: ICreateRiderizeDiscountDTO): Promise<RiderizeDiscounts>;
  findDiscountByDestination(zip_destination: string): Promise<Number>;
}
