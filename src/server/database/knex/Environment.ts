import { Knex } from 'knex'
import path from 'path'
import { Database } from 'sqlite3'

export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds')
    },
    pool: {
        afterCreate: (connection: Database, done: (err?: Error) => void) => {
            connection.run('PRAGMA foreign_keys = ON', (err: Error | null) => {
                done(err || undefined);
            });
        }
    }
}

export const test: Knex.Config = {
    ...development,
    connection: ':memory:'
}

export const production: Knex.Config = {
    client: 'pg',
    useNullAsDefault: true,
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds')
    },
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT || 5432),
        ssl: { rejectUnauthorized: false }
    },
}