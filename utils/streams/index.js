const through2 = require('through2');
const reverseBuffer = require('buffer-reverse');
const parseCsv = require('csv-parse/lib/sync');
const StreamConcat = require('stream-concat');

const reverse = () => through2(function (chunk, enc, callback) {
    this.push(reverseBuffer(chunk));
    callback();
});

const upperCase = () => through2(function (chunk, enc, callback) {
    this.push(Buffer.from(
        chunk.toString().toUpperCase()
    ));
    callback();
});

const csvToJson = () => through2(function (chunk, enc, callback) {
    this.push(
        JSON.stringify(
            parseCsv(
                chunk.toString())))
    callback();
});

const concat = (streams) => new StreamConcat(streams);

module.exports = {
    concat,
    csvToJson,
    upperCase,
    reverse
};
