import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'mariadb',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV !== 'production', // Set to false in production
    logging: process.env.NODE_ENV === 'development',
    dropSchema: false,
    // keepConnectionAlive: true,
    timezone: 'Z',
    dateStrings: true,
  }),
);
