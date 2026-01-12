const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema({
  name: String,
  room: String,
  rent: Number,
  status: String,
  contact: String,
  joinDate: String
});

module.exports = mongoose.model("Tenant", TenantSchema);