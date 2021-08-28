import Config from './src/modules/config'

export default {
  type: 'postgres',
  host: Config.getConfig('databaseHOST').config || '',
  username: Config.getConfig('databaseUSER').config || '',
  password: Config.getConfig('databasePASS').config || '',
  database: Config.getConfig('databaseDB').config || '',
  migrations: ["./src/database/migrations/*ts"],
  entities: ["./src/models/*ts"],
  cli: {
    migrationsDir: "./src/database/migrations"
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}