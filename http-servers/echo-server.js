
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
            req.on('error', (err) => {
                console.warn(err);
                sendInternalServerError(res);
            });

            res.setHeader('Content-Type', req.headers['content-type']);
            req.pipe(res);
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
