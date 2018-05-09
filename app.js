import express from  'express';
const app = express();

// import routes
import indexRoutes from './routes/index';

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// append routes
app.use('/', indexRoutes);

export default app;
