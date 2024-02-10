// chalanController.js

const DeliveryChalan = require('../models/chalanModels');

// create new form
const addChalanDetails = async (req, res) => {
  console.log('Received Form Data:', req.body); // Log the received data
  try {
    const form = await DeliveryChalan.create(req.body);
    console.log('Form created:', form);
    res.status(200).json(form);
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get all forms
const getAllChalanDetails = async (req, res) => {
  try {
    const forms = await DeliveryChalan.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addChalanDetails,
  getAllChalanDetails,
};
