import http from 'http';
import { port } from '../config';

const serverPort = process.env.PORT || port;
const app = http.createServer();

app.on('request', (req, res) => {
  req.pipe(res);
});

app.on('listening', () => {
  console.log(`Server listening on port ${serverPort}`);
});

app.listen(serverPort);
