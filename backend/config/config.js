
require('dotenv').config();
console.log(":",process.env.MY_DATABASE_HOST)

module.exports =
{
  "development": {
    "username": process.env.MY_DATABASE_USERNAME,
    "password": process.env.MY_DATABASE_PASSWORD,
    "database": process.env.MY_DATABASE_DATABASE,
    "host": process.env.MY_DATABASE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MY_DATABASE_USERNAME,
    "password": process.env.MY_DATABASE_PASSWORD,
    "database": process.env.MY_DATABASE_DATABASE,
    "host": process.env.MY_DATABASE_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MY_DATABASE_USERNAME,
    "password": process.env.MY_DATABASE_PASSWORD,
    "database": process.env.MY_DATABASE_DATABASE,
    "host": process.env.MY_DATABASE_HOST,
    "dialect": "mysql"
  }
}
