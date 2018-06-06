module.exports = {
    sendInternalServerError(res) {
        res.statusCode = 500;
        res.end('500 Internal server error');
    },
    clientErrorHandler(err, socket) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    }
};
