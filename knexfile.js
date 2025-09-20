/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexfile = {
  development: {
    client: 'pg',   
    connection: {
      host: '127.0.0.1',    
      port: 5432,          
      database: 'SweetShopData', 
      user: 'postgres',      
      password: 'tiger' 
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',   
      port: 5432,
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

export default knexfile;
