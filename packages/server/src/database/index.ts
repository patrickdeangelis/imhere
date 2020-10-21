import { createConnection } from 'typeorm'

createConnection({
  type: 'postgres',
  host: '192.168.99.101',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'projectLab3',
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
