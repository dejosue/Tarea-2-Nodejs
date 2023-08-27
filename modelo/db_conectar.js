

  import dotenv from 'dotenv'
import knex from 'knex';

dotenv.config()

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '2001.kokue',
        database: 'Colegio'
    }
})


export default db;