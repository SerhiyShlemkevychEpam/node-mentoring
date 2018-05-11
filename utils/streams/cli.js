const {
    concat,
    csvToJson,
    reverse,
    upperCase
} = require('./index');
const globby = require('globby');
const fs = require('fs');
const request = require('request');
const { join: joinPaths } = require('path');
const isValidPath = require('is-valid-path');

const commands = {
    reverse: () =>
        process.stdin
            .pipe(reverse())
            .pipe(process.stdout),
    transform: () =>
        process.stdin
            .pipe(upperCase())
            .pipe(process.stdout),
    outputFile: (path) =>
        fs.createReadStream(path)
            .pipe(process.stdout),
    convertFromFile: (path) =>
        fs.createReadStream(path)
            .pipe(csvToJson())
            .pipe(process.stdout),
    convertToFile: (path) =>
        fs.createReadStream(path)
            .pipe(csvToJson())
            .pipe(fs.createWriteStream(
                path.replace(/\.csv$/i, '.json')
            )),
    cssBundle: async (path) => {
        const streams = (await globby.sync(
            joinPaths(path, '*.css')
        )).map(filePath => fs.createReadStream(filePath));
        streams.push(request('https://drive.google.com/uc?export=download&id=1tCm9Xb4mok4Egy2WjGqdYYkrGia0eh7X'));
        concat(streams)
            .pipe(fs.createWriteStream(
                joinPaths(path, 'bundle.css')
            ));
    }
}

const argv = require('yargs')
    .command({
        command: 'reverse',
        desc: 'Reverse input from stdin to stdout',
        handler: () =>
            commands.reverse()
    })
    .command({
        command: 'transform',
        desc: 'Transform to uppercase input from stdin to stdout',
        handler: () =>
            commands.transform()
    })
    .command({
        command: 'output-file',
        desc: 'Read contents of file and output to stdout',
        handler: (argv) =>
            commands.outputFile(argv.file),
        builder: (yargs) => yargs
            .alias('f', 'file')
            .demandOption('file')
            .describe('file', 'Path to the file')
            .string('file')
            .check((argv, _) => {
                if (!isValidPath(argv.file)) {
                    throw new Error('File must be a valid path to file');
                }
                return true;
            })
    })
    .command({
        command: 'convert-from-file',
        desc: 'Parse contents of csv file and output to stdout',
        handler: (argv) =>
            commands.convertFromFile(argv.file),
        builder: (yargs) => yargs
            .alias('f', 'file')
            .demandOption('file')
            .describe('file', 'Path to the file')
            .string('file')
    })
    .command({
        command: 'convert-to-file',
        desc: 'Parse contents of csv file and output to json file',
        handler: (argv) =>
            commands.convertToFile(argv.file),
        builder: (yargs) => yargs
            .alias('f', 'file')
            .demandOption('file')
            .describe('file', 'Path to the file')
            .string('file')
    })
    .command({
        command: 'css-bundle',
        desc: 'Create bundled css file',
        handler: (argv) =>
            commands.cssBundle(argv.path),
        builder: (yargs) => yargs
            .demandOption('path')
            .alias('p', 'path')
            .describe('path', 'Path to the folder with css files')
            .string('path')
    })
    .usage('Usage: $0 <command> [options]')
    .demandCommand(1, 1, 'You need to specify ONE command')
    .showHelpOnFail(false, 'Specify --help for available options')
    .help('help')
    .alias('h', 'help')
    .argv;