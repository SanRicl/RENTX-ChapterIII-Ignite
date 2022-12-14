import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('zip_ranges_brazil')
export default class ZipCodeRange extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  number_service: string;

  @Column()
  number_service_calculated: string;

  @Column()
  region: string;

  @Column()
  delivery_time: number;

  @Column()
  weight: number;

  @Column()
  value: number;

  @Column()
  zip_origin_start: string;

  @Column()
  zip_origin_end: string;

  @Column()
  zip_destination_start: string;

  @Column()
  zip_destination_end: string;

  @Column()
  zip_origin_ref: string;

  @Column()
  alternative_zip_origin_ref?: string;

  @Column()
  zip_destination_ref: string;

  @Column()
  alternative_zip_destination_ref?: string;

  @Column()
  last_update_code?: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
