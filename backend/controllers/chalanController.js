// chalanController.js

const DeliveryChalan = require('../models/chalanModels');

exports.addChalanDetails = (req, res) => {
  const payload = req.body;

  DeliveryChalan.create(payload, (err, data) => {
    if (err) {
      console.error('Error while saving to MongoDB', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data saved to MongoDB:', data);
      res.status(200).send('Data saved successfully');
    }
  });
};
