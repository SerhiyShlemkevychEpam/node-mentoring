const middlewares = [
    require('./query'),
    require('./cookie'),
];

module.exports = {
    applyTo(app) {
        middlewares.forEach(m => m.applyTo(app));
    }
};
