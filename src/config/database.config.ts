import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'nestjs_example',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};