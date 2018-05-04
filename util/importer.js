const { promisifyAll, promisify } = require('bluebird');
const parse = require('csv-parse');
const fs = promisifyAll(require('fs'));

class Importer {
    static import(path) {
        return fs.readFileAsync(path)
            .then((raw) => new Promise((resolve, reject) => {
                parse(raw, {}, (err, parsed) => {
                    if (err) reject(err);
                    resolve(parsed);
                });
            }))
    }

    static importSync(path) {
        const text = fs.readFileSync(path);
        return parse(text);
    }
};

module.exports = {
    Importer
};
