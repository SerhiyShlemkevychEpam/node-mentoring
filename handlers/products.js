const Router = require('koa-router');
const productsService = require('../services/products');

const router = new Router()
    .prefix('/products')
    .get('/', (ctx) => {
        console.log(121212)
        ctx.body = productsService.get();
    })
    .get('/:id', (ctx) => {
        ctx.body = productsService.getById(ctx.params.id);
    })
    .get('/:id/reviews', (ctx) => {
        ctx.body = productsService.getReviewsById(ctx.params.id);
    });

module.exports = router;
