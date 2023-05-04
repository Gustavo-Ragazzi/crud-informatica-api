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

module.exports = {
    getAllStorage,
    getStorageById,
    addStorage
}