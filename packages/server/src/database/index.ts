import { createConnection } from 'typeorm'

createConnection({
  type: 'postgres',
  host: '192.168.99.101',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'projectLab',
  synchronize: true,
  logging: false,
  entities: ['src/models/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
})
