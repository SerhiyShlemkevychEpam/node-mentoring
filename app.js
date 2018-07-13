import { name, events } from './src/config';
import { Product, User } from './src/models';

import eventEmitter from './src/emitter';
import DirWatcher from './src/dirwatcher';
import Importer from './src/importer';

const dirwatcher = new DirWatcher();
dirwatcher.watch('./src/data', 1000);

const importer = new Importer();
importer.listenSync();
importer.listen();

console.log(`Application name: ${name}`);
new Product();
new User();
