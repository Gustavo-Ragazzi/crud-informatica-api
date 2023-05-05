const fs = require("fs");

function getAllStorage() {
    return JSON.parse(fs.readFileSync("storage.json"))
}

function getStorageById(id) {
    const storage = JSON.parse(fs.readFileSync("storage.json"));

    const filterStorage = storage.filter( storage => storage.id == id )[0];
    return filterStorage;
}

function addStorage(newStorage) {
    const storage = JSON.parse(fs.readFileSync("storage.json"));
    
    const newStorageList = [...storage, newStorage];

    fs.writeFileSync("storage.json", JSON.stringify(newStorageList));
}

function changeStorage(data, id) {
    const storage = JSON.parse(fs.readFileSync('storage.json', 'utf8'));
    const index = storage.findIndex(item => item.id === Number(id));
    if(index !== -1) {
      storage[index] = { ...data, id: Number(id) };
      fs.writeFileSync('storage.json', JSON.stringify(storage, null, 2), 'utf8');
    } else {
      throw new Error('Item não encontrado');
    }
  }

function findStorageIndexById(storage, id) {
    return storage.findIndex(item => item.id === id);
}

function deleteStorage(id) {
    const currentStorage = JSON.parse(fs.readFileSync("storage.json"));

    filteredStorage = currentStorage.filter(item => item.id != id);

    fs.writeFileSync("storage.json", JSON.stringify(filteredStorage))
}

module.exports = {
    getAllStorage,
    getStorageById,
    addStorage,
    changeStorage,
    findStorageIndexById,
    deleteStorage
}