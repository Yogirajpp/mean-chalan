const chalanFormModels = require('../models/chalanFormModels')
const mongoose = require('mongoose')


const addChalanForm = async (req, res) => {
    try {
      const newChalanForm = new chalanFormModels(req.body);
      await newChalanForm.save();
      res.status(201).json(newChalanForm);
    } catch (error) {
      console.error('Error adding chalan form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};



const getAllChalanForm = async (req, res) => {
    try {
      const chalanForms = await chalanFormModels.find();
      res.status(200).json(chalanForms);
    } catch (error) {
      console.error('Error retrieving chalan forms:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


module.exports = {
    addChalanForm,
    getAllChalanForm
}