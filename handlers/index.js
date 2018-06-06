const handlers = [
    require('./products'),
    require('./users'),
];

module.exports = {
    applyTo(app) {
        handlers.forEach(h => app.use(h.routes()));
    }
};
