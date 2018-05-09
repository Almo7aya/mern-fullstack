import config from  './config';
import http from 'http';
import app from './app';

const server = http.createServer(app);



server.listen(config.port);

server.on('listening', () =>
  process.stdout.write(`server is running at port ${config.port}`));


server.on('error', () =>
  process.stdout.write(`error with dam server at port ${config.port}`));

