const {
    Server
} = require('http');
const {
    sendInternalServerError,
    clientErrorHandler
} = require('./util');

const data = JSON.stringify({
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
        { color: 'blue' },
        { size: 'XL' }
    ]
});

const start = (port) => {
    const server = new Server();

    server.on('request', (req, res) => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        } catch (err) {
            console.warn(err);
            sendInternalServerError(res);
        }
    });

    server.on('clientError', clientErrorHandler);

    server.listen(port);
};

module.exports = {
    start
};
