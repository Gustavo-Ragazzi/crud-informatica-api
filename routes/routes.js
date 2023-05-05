const express = require('express');
const fs = require("fs");
const { getAllStorage, getStorageById, addStorage, changeStorage, findStorageIndexById, deleteStorage } = require('../services/storage');
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
  try {
    const newStorage = req.body;

    if (req.body.id && req.body.nome && req.body.marca && req.body.preco && req.body.categoria && req.body.qnt) {
      const storage = JSON.parse(fs.readFileSync("storage.json"));
      if (!storage.some(item => item.id === req.body.id)) {
        addStorage(newStorage);
        res.status(201);
        res.send("Novo item inserido com sucesso");
      } else {
        res.status(422);
        res.send("Esse ID já existe!")
      }

    } else {
      res.status(422);
      res.send("Todos os campos são obrigatórios!")
    }

  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
});

router.patch('/storage/:id', (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const storage = JSON.parse(fs.readFileSync("storage.json"));
    const index = findStorageIndexById(storage, id);

    if (index !== -1) {
      const updatedStorage = {
        ...storage[index],
        ...body
      };

      storage[index] = updatedStorage;
      fs.writeFileSync("storage.json", JSON.stringify(storage));
      res.send("Item modificado com sucesso");
    } else {
      res.status(404).send("Item não encontrado");
    }

  } catch(error) {
    res.status(500).send(error.message);
  }
});

router.delete('/storage/:id', (req, res) => {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      deleteStorage(id);
      res.send("Livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido")
    } 
  } catch {
      res.status(500);
      res.send(error.message);
    }
  }
);

module.exports = router;
