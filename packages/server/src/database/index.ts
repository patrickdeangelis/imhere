import { createConnection } from 'typeorm'

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'passnutri',
  database: 'bd-project',
  synchronize: true,
  logging: false,
  entities: ['src/models/**/*.ts'],
  migrations: ['src/models/migration/**/*.ts'],
  subscribers: ['src/models/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/models/migration',
    subscribersDir: 'src/models/subscriber'
  }
})
