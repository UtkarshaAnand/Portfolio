import 'dotenv/config';
import { env } from './utils';
import app from './apps';
import mongoose from 'mongoose';

const port = env.PORT;
const dbUri = env.DB_URI;

mongoose
  .connect(dbUri)
  .then(() => {
    console.log('Connected to native DB');
    app.listen(port, () => {
      console.log('Server running on port ', port);
    });
  })
  .catch((err) => {
    console.log('DB connection failed!', err);
  });
