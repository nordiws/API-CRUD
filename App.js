/* Imports */
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';
const app = express();

/* MongoDB connection */
const uri =
  'mongodb+srv://nordiws:paul8813@bootcampfullstack.fspeg.mongodb.net/fullstack?retryWrites=true&w=majority';
(async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao Mongo DB Atlas');
  } catch (err) {
    console.log('Erro ao conectar ao Mongo DB Atlas' + err);
  }
})();

/* Server control */
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API started!'));
