// chalanModels.js

const mongoose = require('mongoose');

const deliveryChalanSchema = new mongoose.Schema({
  delivery_challan_id: Number,
  parts: [
    {
      part_id: Number,
      serial_no: Number,
      qty: Number,
      unit: String
    }
  ]
});

const DeliveryChalan = mongoose.model('DeliveryChalan', deliveryChalanSchema);

module.exports = DeliveryChalan;
