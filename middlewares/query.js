const {
    flow: pipe,
    fromPairs
} = require('lodash');

module.exports = {
    applyTo(app) {
        app.use((ctx, next) => {
            const rawQuery = ctx.request.querystring;

            const query = pipe(
                () => rawQuery.split(/\&/g),
                arr => arr.filter(_ => _),
                arr => arr.map(segment => segment.split(/\=/)),
                fromPairs,
            )();

            ctx.state.parsedQuery = query;

            return next();
        });
    }
};
