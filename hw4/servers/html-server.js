import http from 'http';
import fs from 'fs';
import replaceStream from 'replacestream';
import { port } from '../config';

const serverPort = process.env.PORT || port;
const app = http.createServer();
app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(`${__dirname}/static/index.htm`)
    .pipe(replaceStream('{message}', 'Real message text'))
    .pipe(res);
});

app.on('listening', () => {
  console.log(`Server listening on port ${serverPort}`);
});

app.listen(serverPort);
