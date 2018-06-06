const Koa = require('koa');
const { port } = require('./config');
const middlewars = require('./middlewares');
const handlers = require('./handlers');

const app = new Koa();

middlewars.applyTo(app);
handlers.applyTo(app);

app.listen(port);
