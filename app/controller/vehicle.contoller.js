const Vehicle = require('../../models/Vehicle');

exports.findAll = (req, res) => {
  Vehicle.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Student Details."
    });
  });
};

exports.create = (req, res) => {
    //create a driver
    const vehicle = new Vehicle({
        contact: req.body.contact,
        address_from: req.body.address_from,
        address_to: req.body.address_to,
        truck_size: req.body.truck_size,
        description: req.body.description,
        weight: req.body.weight,
        truck_space: req.body.truck_space,
        capacity_furniture: req.body.capacity_furniture,
        capacity_box: req.body.capacity_box,
    });
    console.log(vehicle);
    //save the note to the database
    vehicle.save()
      .then(data => {
        res.send(data);
      }).catch(err => {
      res.status(500).send({
        message: err.message || "Error occured while selecting the Vehicle"
      });
    });
  };