const express = require('express');
const router = express.Router();
const connection = require('../helpers/db');

const table = 'contacts';

router.get('/', (req, res) => {
  connection.query(`SELECT * FROM ${table}`, (error, results) => {
    if(error){
      return res.status(500).send(`Unexpected error: ${error.message}`);
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const contact_id = req.params.id;
  connection.query(`SELECT * FROM ${table} WHERE id = ${contact_id}`, (error, results) => {
    if(error){
      return res.status(500).send(`Unexpected error: ${error.message}`);
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const data = req.body;
  connection.query(`INSERT INTO ${table} SET ?`, data, (error, results) => {
    if(error){
      return res.status(500).send(`Unexpected error: ${error.message}`);
    }
    res.send(`${data.firstname} has been added.`);
  });
});

router.put('/:id', (req, res) => {
  const contact_id = req.params.id;
  const data = req.body;
  connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, contact_id], (error, results) => {
    if(error){
      return res.status(500).send(`Unexpected error: ${error.message}`);
    }
    res.send(`Contact #${contact_id} has been updated.`);
  });
});

router.delete('/:id', (req, res) => {
  const contact_id = req.params.id;
  connection.query(`DELETE FROM ${table} WHERE id = ${contact_id}`, (error, results) => {
    if(error){
      return res.status(500).send(`Unexpected error: ${error.message}`);
    }
    res.send(`Contact #${contact_id} has been removed.`);
  });
});
module.exports = router;