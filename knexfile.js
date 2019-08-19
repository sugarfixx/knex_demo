
module.exports = {
    development: {
        client: 'pg',
        connection: 'postgress://localhost/knex_test',
        migrations : {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/',
        },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations : {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/',
        },
    }
}
