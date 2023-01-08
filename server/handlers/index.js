const {
  getTrains,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
} = require("./train-handlers");

const {
  getUsers,
  getUserById,
  // updateUser,
  deleteUser,
  registerUser,
  loginUser,
} = require("./user-handlers");

const {
  getPassengers,
  getPassengerById,
  cancelPassenger,
  addPassenger,
} = require("./passenger-handlers");

module.exports = {
  getTrains,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
  getUsers,
  getUserById,
  // updateUser,
  deleteUser,
  registerUser,
  loginUser,
  getPassengers,
  getPassengerById,
  cancelPassenger,
  addPassenger,
};
