const express = require('express');
const { getAllStorage, getStorageById } = require('../services/storage');
const router = express.Router();

router.get('/storage', (req, res) => {
  try {
    const storage = getAllStorage();
    res.send(storage);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

router.get('/storage/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (!isNaN(id)) {
      const storage = getStorageById(id);
      res.send(storage);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  }
  catch (error) {
    res.status(500);
    res.send(error.message)
  }
});

router.post('/storage', (req, res) => {
  // Sua lógica para criar um novo item
});

router.put('/storage/:id', (req, res) => {
  // Sua lógica para atualizar um item existente
});

router.delete('/storage/:id', (req, res) => {
  // Sua lógica para excluir um item existente
});

module.exports = router;
