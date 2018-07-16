const port = process.env.POSTGRES_PORT || 3000;
const host = process.env.POSTGRES_HOST;
const dbPort = process.env.POSTGRES_PORT;
const database = process.env.POSTGRES_DB;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const dialect = 'postgres';
export {
  port,
  dbPort,
  host,
  database,
  username,
  password,
  dialect
};
