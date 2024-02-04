const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chalanFormSchema = new mongoose.Schema({
  delivery_challan_id: Number,
  parts: [
    {
      part_id: Number,
      serial_no: Number,
      qty: Number,
      unit: String,
    },
  ],
}, { timestamps: true });


module.exports = mongoose.model('ChalanForm', chalanFormSchema);
