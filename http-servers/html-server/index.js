
const {
    Server
} = require('http');
const fs = require('fs');
const path = require('path');
const through2 = require('through2');
const { URL } = require('url');
const {
    sendInternalServerError,
    clientErrorHandler
} = require('./util');

const messageToken = Buffer.from('{message}');

const start = (port) => {
    const server = new Server();

    server.on('request', (req, res) => {
        let stream;
        try {
            const url = new URL(`http://any${req.url}`);

            stream = fs.createReadStream(path.join(__dirname, 'index.html'));
            stream.on('error', (err) => {
                console.warn(err);
                sendInternalServerError(res);
            })
            stream.on('finish', () => {
                stream.close();
                res.setHeader('Content-Type', 'text/html');
                res.end();
            });

            stream
                .pipe(through2((chunk, enc, callback) => {
                    if (chunk.includes(messageToken)) {
                        chunk = Buffer.from(
                            chunk.toString().replace(
                                /{message}/,
                                (url.searchParams
                                    && url.searchParams.get('message'))
                                || 'no-message'
                            )
                        );
                    }

                    callback(null, chunk);
                }))
                .pipe(res);
        } catch (err) {
            console.warn(err);
            stream && stream.close();
            sendInternalServerError(res);
        }
    });

    server.on('clientError', clientErrorHandler);

    server.listen(port);
};

module.exports = {
    start
};
