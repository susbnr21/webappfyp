const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const VehicleSchema = new Schema({
    contact: String,
    address_from: String,
    address_to: String,
    truck_size: String,
    description: String,
    weight: String,
    truck_space: String,
    capacity_furniture: String,
    capacity_box: String,
});
module.exports = mongoose.model("Vehicle", VehicleSchema);