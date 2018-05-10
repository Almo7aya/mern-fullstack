import express from 'express';
import path from 'path';
import nodeSass from 'node-sass-middleware';

const app = express();

// import routes
import indexRoutes from './routes/index';

// template engine
app.set('view engine', 'ejs');

app.use(nodeSass({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// append routes
app.use('/', indexRoutes);

export default app;
