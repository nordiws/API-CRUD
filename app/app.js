/* Imports */
import express from 'express';
import { studentRouter } from '../routes/studentRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

/* MongoDB connection */
(async () => {
  try {
    await mongoose.connect(process.env.URL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao Mongo DB Atlas');
  } catch (err) {
    console.log('Erro ao conectar com o Mongo DB Atlas' + err);
  }
})();

/* Server control */
const app = express();
app.use(express.json());
app.use(studentRouter);
app.listen(process.env.PORT, () => console.log('API started!'));
