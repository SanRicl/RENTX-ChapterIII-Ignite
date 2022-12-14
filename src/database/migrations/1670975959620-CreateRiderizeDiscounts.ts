import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRiderizeDiscounts1670975959620
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'riderize_discounts',
        columns: [
          {
            name: 'zip_destination_start',
            type: 'varchar',
            isPrimary: true,
            length: '50',
          },
          {
            name: 'zip_destination_end',
            type: 'varchar',
            isPrimary: true,
            length: '50',
          },
          {
            name: 'discount',
            type: 'integer',
            default: 0,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('riderize_discounts');
  }
}
