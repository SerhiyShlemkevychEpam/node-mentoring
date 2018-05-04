const { DirWatcher } = require('./util/dirwatcher');
const { Importer } = require('./util/importer');
const path = require('path');

// exec demo.sh to populate data in "data" folder

const run = () => {
    const watcher = new DirWatcher(
        path.join(__dirname, 'data'),
        500
    );

    watcher.on('error', (err) => {
        console.error(err);
    })

    watcher.on('changed', async ({ created }) => {
        try {
            const data = await Promise.all(
                created.map(
                    path =>
                        Importer.import(path)
                            .then(content => ({ path, content }))));
            if (data.length) console.log(JSON.stringify(data, null, 2));
        } catch (err) {
            console.error(err);
        }
    });

    watcher.watch();
};

run();
