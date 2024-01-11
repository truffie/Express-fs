const fs = require('fs');
const path = './src/storage.json';
const json = fs.readFileSync(path);
const arr = JSON.parse(json);

const getAllData = () => {
  if (!arr.length) throw new Error('empty Array');
  return arr;
};
const getById = id => {
  
  const data = arr.filter(el => el.id == id);
  if (arr.length === data.length) throw new Error('missing id');
  return data;
};

const addData = title => {
  const data = arr.filter(el => el.title == title);
  if (data.length) throw new Error('already exists');
  arr.push({ id: arr.length + 1, title });
  fs.writeFileSync(path, JSON.stringify(arr));
  return arr;
};

const updateUser = (id, title) => {
  const index = arr.findIndex(el => el.id == id);
  if (index < 0) throw new Error('not found');
  if (arr[index].title === title) throw new Error('old value');
  arr[index] = { ...arr[index], title };
  fs.writeFileSync(path, JSON.stringify(arr));
  return arr;
};
const deleteById = id => {
  const data = arr.filter(el => el.id != id);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
};
module.exports = { getAllData, getById, addData, updateUser, deleteById };
