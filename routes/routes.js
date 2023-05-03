const express = require('express');
const { getAllStorage } = require('../services/storage');
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
  console.log('Rota GET com ID');
  res.send('Rota GET com ID');
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
