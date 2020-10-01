import { createConnection } from 'typeorm'

createConnection({
  type: 'postgres',
  host: 'http://192.168.99.101/',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'projectLab',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
})
