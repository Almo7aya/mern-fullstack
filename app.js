import express from  'express';
const app = express();

app.get('/', (req, res) => {
  res.end('done');
});


export default app;
