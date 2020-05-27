const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateInfoInput = require("../../validation/truck");

// Load Truck model
const Truck = require("../../models/Truck");

// getting truck details 
router.get("/truck", (req, res) => {
        Truck.find()
          .then(data => {
            res.send(data);
          }).catch(err => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving Details."
          });
    });
})

// posting truck details
router.post("/truck", (req, res) => {

    // Form validation
    const { errors, isValid } = validateInfoInput(req.body);

    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    Truck.findOne({ contact: req.body.contact }).then(user => {
        if (user) {
            return res.status(400).json({ contact: "Number already exists" });
        } else {
            const newTruck = new Truck({
                name: req.body.name,
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
                extra: req.body.extra,
            });
        console.log(newTruck);
        //save the note to the database
        newTruck.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error occured while selecting the truck"
                });
            }); 
        }
    //  Info Token
        jwt.sign(
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        )
    });
});

module.exports = router;