const key = require('../../config/keys');
const user = require('../../models/User');

const Accept = require('../../models/Accept');
const Truck = require('../../models/Truck');

exports.send = (req, res) => {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: key.user,
        pass: key.password
      }
    });

    const mailOptions = {
      from: 'rentalshifter@gmail.com', // sender address
      to: req.body.email, // list of receivers
      subject: 'Request Permission', // Subject line
      html:
      '<p>Hello There, your request has been accepted.</p>'
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err){
        return res.send(err)}
      else{
        return res.send(info)}
    });
};

exports.decline = (req, res) => {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: key.user,
      pass: key.password
    }
  });

  const mailOptions = {
    from: 'rentalshifter@gmail.com', // sender address
    to: req.body.email, // list of receivers
    subject: 'Request Permission', // Subject line
    html:
    '<p>Hello There, Sorry your request has been declined.</p>'
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err){
      return res.send(err)}
    else{
      return res.send(info)}
  });
};

exports.findAll = (req, res) => {
  Accept.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Student Details."
    });
  });
};

exports.create = (req, res) => {
    const accept = new Accept({
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
    console.log(accept);
    //save the note to the database
    accept.save()
      .then(data => {
        res.send(data);
      }).catch(err => {
      res.status(500).send({
        message: err.message || "Error occured while accepting the Vehicle"
      });
    });
  };

  exports.delete = (req, res) => {
    Truck.findByIdAndRemove(req.params.acceptId)
      .then(data => {
        if(!data) {
          return res.status(404).send({
            message: "Vehicle not found with id " + req.params.acceptId
          });
        }
        res.send({message: "Request deleted successfully!"});
      }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "Driver not found with id " + req.params.acceptId
        });
      }
      return res.status(500).send({
        message: "Could not delete Driver with id " + req.params.acceptId
      });
    });
  };