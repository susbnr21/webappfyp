const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TruckSchema = new Schema({
    name: {
        type: String,
    },
    contact: {
        type: String,
        required: true
    },
    address_from: {
        type: String,
        required: true
    },
    address_to: {
        type: String,
        required: true
    },
    truck_size: {
        type: String,
    },
    description: {
        type: String,
    },
    weight: {
        type: String,
    },
    truck_space: {
        type: String,
    },
    capacity_furniture: {
        type: String,
    },
    capacity_box: {
        type: String,
    },
    worker: {
        type: String,
    },
    boxes: {
        type: String,
    },
    extra: {
        type: String,
    }
});
module.exports = Truck =mongoose.model("trucks", TruckSchema);