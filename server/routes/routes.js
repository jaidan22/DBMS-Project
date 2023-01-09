const express = require("express");
const db = require("../handlers/index");

const router = express.Router();
router.get("/trains", db.getTrains);
router.get("/train/:id", db.getTrainById);
router.get("/journey/:id", db.getSchById);
router.post("/trains", db.createTrain);
router.put("/train", db.updateTrain);
router.delete("/train", db.deleteTrain);

router.get("/users", db.getUsers);
router.get("/user/:id", db.getUserById);
router.delete("/user", db.deleteUser);
router.post("/register", db.registerUser);
router.post("/login", db.loginUser);

router.get("/passengers", db.getPassengers);
router.get("/passenger/:id", db.getPassengerById);
router.delete("/cancel", db.cancelPassenger);
router.post("/book", db.addPassenger);


module.exports = router;
