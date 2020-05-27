const User = require('../../models/User');

exports.findAll = (req, res) => {
    User.find()
      .then(data => {
        res.send(data);
      }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Drivers."
      });
    });
  };