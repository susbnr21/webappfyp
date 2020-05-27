const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors")

const app = express();
const users = require("./routes/api/users");
const trucks = require("./routes/api/trucks");
const admins = require("./routes/api/admins");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/trucks", trucks);
app.use("/api/admins", admins);

// importing vehicle
// const vehicles = require('./app/controller/vehicle.contoller');
// const usersinfo = require('./app/controller/user.controller');

//for vehicle
// app.post('/vehicles', vehicles.create);

// //for users
// app.get('/usersinfo', usersinfo.findAll);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));