module.exports = {
    express: {
        name: "Server-Test-Michelada",
        port: 8000
    },
    knex: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          database: 'postgres',
          user:     'postgres',
          password: 'papitas'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
    }
}