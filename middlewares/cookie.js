const {
    flow: pipe,
    fromPairs
} = require('lodash');

module.exports = {
    applyTo(app) {
        app.use((ctx, next) => {
           const rawHeader = ctx.req.headers['cookie'];

            const cookies = pipe(
                () => rawHeader.split(/\;\s/g),
                arr => arr.filter(_ => _),
                arr => arr.map(segment => segment.split(/\=/)),
                fromPairs,
            )();
            
            ctx.state.parsedCookies = cookies;

            return next();
        })
    }
};
