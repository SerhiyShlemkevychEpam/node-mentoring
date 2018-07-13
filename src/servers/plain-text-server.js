import http from 'http';
import { port } from '../config';

const serverPort = process.env.PORT || port;
const app = http.createServer();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

app.on('listening', () => {
  console.log(`Server listening on port ${serverPort}`);
});

app.listen(serverPort);
