const { EventEmitter } = require('events');
const { promisifyAll } = require('bluebird');
const { without, intersection, keys } = require('lodash');
const path = require('path');

const fs = promisifyAll(require('fs'));

class DirWatcher extends EventEmitter {
    constructor(path, delay = 500) {
        if (typeof path !== 'string') {
            throw new TypeError('Expected "path" to be a string');
        }

        if (typeof delay !== 'number') {
            throw new TypeError('Expected "delay" to be a number');
        }

        if (delay < 0) {
            throw new RangeError('Expected "delay" to be a positive number');
        }

        super();

        this._path = path;
        this._delay = delay;
        this._processedFiles = {};
    };

    async _checkDir() {
        try {
            const currentFilePaths = (await fs.readdirAsync(this._path))
                .map(fileName => path.join(this._path, fileName));
            const currentFiles = {};
            await Promise.all(currentFilePaths.map(async (path) => {
                const { ctimeMs, mtimeMs, ...other } = await fs.statAsync(path);
                currentFiles[path] = {
                    ctimeMs,
                    mtimeMs
                };
            }));

            const processedPaths = keys(this._processedFiles);

            const deleted = without(processedPaths, ...currentFilePaths);
            const created = without(currentFilePaths, ...processedPaths);
            const changed = intersection(processedPaths, currentFilePaths)
                .filter(path =>
                    currentFiles[path].ctimeMs > this._processedFiles[path].ctimeMs
                    || currentFiles[path].mtimeMs > this._processedFiles[path].mtimeMs);

            this._processedFiles = currentFiles;

            this.emit('changed', {
                changed,
                created,
                deleted
            });
        } catch (err) {
            this.emit('error', err);
        }
    }

    watch() {
        this._interval = setInterval(this._checkDir.bind(this), this._delay);
    }

    stopWatch() {
        clearInterval(this._interval);
    }
}

module.exports = {
    DirWatcher
};
