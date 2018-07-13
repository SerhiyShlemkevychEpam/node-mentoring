import http from 'http';
import { port } from '../config';
import pojo from './static/POJO';

const serverPort = process.env.PORT || port;
const app = http.createServer();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(pojo));
});

app.on('listening', () => {
  console.log(`Server listening on port ${serverPort}`);
});

app.listen(serverPort);
