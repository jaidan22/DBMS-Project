const {
  getTrains,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
  getSchById,
  decSeat,
  incSeat,
  searchByStation,
  getStations
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
  getPassengerByPNR,
} = require("./passenger-handlers");

module.exports = {
  getTrains,
  getTrainById,
  createTrain,
  getSchById,
  updateTrain,
  deleteTrain,
  getUsers,
  getUserById,
  incSeat,
  // updateUser,
  deleteUser,
  registerUser,
  loginUser,
  getPassengers,
  getPassengerById,
  cancelPassenger,
  searchByStation,
  decSeat,
  addPassenger,
  getPassengerByPNR,
  getStations
};
