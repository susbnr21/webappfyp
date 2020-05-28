const Decline = require('../../models/Decline');
const Truck = require('../../models/Truck');

exports.findAll = (req, res) => {
    Decline.find()
      .then(data => {
        res.send(data);
      }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Student Details."
      });
    });
  };
  
  exports.create = (req, res) => {
      const decline = new Decline({
          name: req.body.name,
          email: req.body.email,
          contact: req.body.contact,
          address_from: req.body.address_from,
          address_to: req.body.address_to,
          truck_size: req.body.truck_size,
          description: req.body.description,
          weight: req.body.weight,
          truck_space: req.body.truck_space,
          capacity_furniture: req.body.capacity_furniture,
          capacity_box: req.body.capacity_box,
          worker: req.body.worker,
          boxes: req.body.boxes,
          extra: req.body.extra
      });
      console.log(decline);
      //save the note to the database
      decline.save()
        .then(data => {
          res.send(data);
        }).catch(err => {
        res.status(500).send({
          message: err.message || "Error occured while accepting the Vehicle"
        });
      });
    };
  
    exports.delete = (req, res) => {
      Truck.findByIdAndRemove(req.params.declineId)
        .then(data => {
          if(!data) {
            return res.status(404).send({
              message: "Vehicle not found with id " + req.params.declineId
            });
          }
          res.send({message: "Request deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: "Driver not found with id " + req.params.declineId
          });
        }
        return res.status(500).send({
          message: "Could not delete Driver with id " + req.params.declineId
        });
      });
    };