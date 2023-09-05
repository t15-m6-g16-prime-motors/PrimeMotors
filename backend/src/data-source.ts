import 'reflect-metadata';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationsPath: string = path.join(
    __dirname,
    './migrations/**.{ts,js}'
  );
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  const dbUrl: string | undefined = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error('Env var DATABASE_URL does not exists.');
  }

  if (nodeEnv === 'production') {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL!,
      entities: [entitiesPath],
      migrations: [migrationsPath]
    };
  }
  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath]
  };
};

const AppDataSource: DataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
