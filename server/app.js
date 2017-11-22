import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { PORT } from './constants';
import { connectDb } from './db';
import { setRoutes } from './routes';


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setRoutes(app);

connectDb().then(() => {
  app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}!`);
  });
});
