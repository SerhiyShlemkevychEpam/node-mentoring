const {
    Server
} = require('http');
const {
    sendInternalServerError,
    clientErrorHandler
} = require('./util');

const start = (port) => {
    const server = new Server();

    server.on('request', (req, res) => {
        try {
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello world');
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
