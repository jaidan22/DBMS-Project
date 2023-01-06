const express = require("express");
const db = require("../handlers/index");

const router = express.Router();
router.get("/trains", db.getTrains);
router.get("/train/:id", db.getTrainById);
router.post("/trains", db.createTrain);
router.put("/train", db.updateTrain);
router.delete("/train/:id", db.deleteTrain);

router.get("/users", db.getUsers);
router.get("/user/:id", db.getUserById);
router.put("/user", db.updateUser);
router.delete("/user", db.deleteUser);
router.post("/register", db.registerUser);
router.post("/login", db.loginUser);

module.exports = router;

/*

endpoint: /trains/:id

request : /trains?id=123

*/
