import express from 'express';
import { studentModel } from '../models/studentModel.js';
const app = express();

//ADD a new document
app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET all documents
app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE an existing document
app.patch('/student/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!student) {
      res.status(404).send('Documento não encontrado na coleção!');
      return;
    }
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/student/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    if (!student) {
      res.status(404).send('Documento não encontrado na coleção!');
      return;
    }
    res.send('Documento excluido com sucesso!');
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as studentRouter };
