module.exports = {
  "development": {
    "username": "postgres",
    "password": "password",
    "database": "postgres_db",
    "host": "postgres",
    "dialect": 'postgres',
  },
  "test": {
    "username": "postgres",
    "password": "password",
    "database": "postgres_db",
    "host": "postgres",
    "dialect": 'postgres',
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_SERVER,
    "dialect": 'postgres',
  },
};
