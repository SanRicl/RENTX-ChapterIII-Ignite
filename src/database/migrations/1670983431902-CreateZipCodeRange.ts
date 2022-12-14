import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateZipCodeRange1670983431902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'zip_ranges_brazil',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },

          {
            name: 'number_service',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'number_service_calculated',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'region',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'delivery_time',
            type: 'integer',
          },
          {
            name: 'weight',
            type: 'float',
          },
          {
            name: 'value',
            type: 'float',
          },
          {
            name: 'zip_origin_start',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'zip_origin_end',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'zip_destination_start',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'zip_destination_end ',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'zip_origin_ref',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'alternative_zip_origin_ref',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'zip_destination_ref',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'alternative_zip_destination_ref',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'last_update_code',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('zip_ranges_brazil');
  }
}
