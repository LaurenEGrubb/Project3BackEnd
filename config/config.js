require('dotenv').config()
module.exports = {
  development: {
    database: 'picture_perfect_development',
    dialect: 'postgres'
  },
  test: {
    database: 'picture_perfect_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}