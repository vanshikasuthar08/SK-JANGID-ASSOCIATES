const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Residential", "Commercial"
  image: { type: String, required: true }, // URL of the image
  location: { type: String },
  year: { type: String },
  description: { type: String },
  details: { type: String }, // Longer description
  sustainable: { type: Boolean, default: false }, // Is it eco-friendly?
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
