const pool = require("../psql");

const getPassengers = (req, res) => {
  // console.log(req);
  pool.query("SELECT * FROM passenger", (error, results) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.name,
        message: error.message,
      });
    }
    res.status(200).json(results.rows);
  });
};

const getPassengerById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM passenger WHERE u_id = $1",
    [id],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).json(results.rows);
    }
  );
};

const addPassenger = (req, res) => {
  const { seat_no, sch_id, email, age, phone, u_id, name } = req.body;

  pool.query(
    "INSERT INTO passengers (seat_no,sch_id,email,age,phone,u_id,name) VALUES ($1, $2, $3,$4, $5, $6, $7)",
    [seat_no, sch_id, email, age, phone, u_id, name],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(201).send(`passenger added `);
    }
  );
};

// const updateTrain = (req, res) => {
//   const { train_id, train_name, cost, total_seats } = req.body;

//   pool.query(
//     "UPDATE trains SET train_name = $2, cost = $3, total_seats = $4 WHERE train_id = $1",
//     [train_id, train_name, cost, total_seats],
//     (error, results) => {
//       if (error) {
//         return res.status(400).json({
//           success: false,
//           error: error.name,
//           message: error.message,
//         });
//       }
//       res.status(200).send(`Train modified with ID: ${results}`);
//     }
//   );
// };

const cancelPassenger = (req, res) => {
  const id = req.body.id;

  pool.query(
    "DELETE FROM passenger WHERE p_id = $1",
    [id],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).send(`passenger ticket with ID: ${id},   ${results}`);
    }
  );
};

module.exports = {
  getPassengers,
  getPassengerById,
  cancelPassenger,
  addPassenger,
};
