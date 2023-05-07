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
    const newStorageListSorted = orderById(newStorageList)

    fs.writeFileSync("storage.json", JSON.stringify(newStorageListSorted));
}

function changeStorage(changes, id) {
    let currentStorage = JSON.parse(fs.readFileSync("storage.json"));

    const changedIndex = currentStorage.findIndex(item => item.id == id);

    if(changedIndex === -1) {
        throw new Error("Item não encontrado");
    } 

    currentStorage[changedIndex] = { ...currentStorage[changedIndex], ...changes };
    const currentStorageSorted = orderById(currentStorage);

    fs.writeFileSync("storage.json", JSON.stringify(currentStorageSorted));
}

function deleteStorage(id) {
    const currentStorage = JSON.parse(fs.readFileSync("storage.json"));

    filteredStorage = currentStorage.filter(item => item.id != id);
    const sortFilteredStorage = orderById(filteredStorage);

    fs.writeFileSync("storage.json", JSON.stringify(sortFilteredStorage))
}

function orderById(list) {
    return list.sort((a, b) => a.id - b.id);
}

module.exports = {
    getAllStorage,
    getStorageById,
    addStorage,
    deleteStorage,
    changeStorage
}