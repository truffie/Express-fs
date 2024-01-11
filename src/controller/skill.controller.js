const express = require('express');
const { getAllData, getById, addData, updateUser, deleteById } = require('../service/skill.service');
const { validateID } = require('../helper/validate');
const { buildResponse } = require('../helper/buildResponse');

const router = express.Router();

router.get('/', (_req, res) => {
  try {
    const data = getAllData();
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});
router.get('/:id', validateID, (req, res) => {
  try {
    const { id } = req.params;
    const data = getById(id);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

router.post('/', (req, res) => {
  try {
    const { title } = req.body;
    const data = addData(title);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateUser(id, title);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteById(id);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

module.exports = router;
