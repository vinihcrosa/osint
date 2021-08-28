export default {
  type: 'postgres',
  host:  'localhost',
  username:'osint',
  password:  '123456789',
  database:  'osint',
  migrations: ["./src/database/migrations/*ts"],
  entities: ["./src/models/*ts"],
  cli: {
    migrationsDir: "./src/database/migrations"
  }
}