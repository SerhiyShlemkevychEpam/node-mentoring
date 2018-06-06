const Router = require('koa-router');
const usersService = require('../services/users');

const router = new Router()
    .prefix('/users')
    .get('/', (ctx) => {
        ctx.body = usersService.get();
    });

module.exports = router;
