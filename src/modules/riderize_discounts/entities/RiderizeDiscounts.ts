import { BaseEntity, Column, Entity,  PrimaryColumn,  PrimaryGeneratedColumn } from 'typeorm';

@Entity('riderize_discounts')
export default class RiderizeDiscounts extends BaseEntity {
  @PrimaryColumn()
  zip_destination_start: string;

  @PrimaryColumn()
  zip_destination_end: string;

  @Column()
  discount: number;
}
