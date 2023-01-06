const pool = require("../psql");

const getTrains = (req, res) => {
  // console.log(req);
  pool.query("SELECT * FROM trains", (error, results) => {
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

const getTrainById = (req, res) => {
  // console.log(req.params.id);
  res.send("jslkdfjslf");
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM trains WHERE train_id = $1",
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

const createTrain = (req, res) => {
  const { train_name, cost, total_seats } = req.body;

  pool.query(
    "INSERT INTO trains (train_name, cost, total_seats) VALUES ($1, $2, $3)",
    [train_name, cost, total_seats],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(201).send(`Train added with ID: ${results}`);
    }
  );
};

const updateTrain = (req, res) => {
  // const id = parseInt(req.params.id);
  const { train_id, train_name, cost, total_seats } = req.body;

  pool.query(
    "UPDATE trains SET train_name = $2, cost = $3, total_seats = $4 WHERE train_id = $1",
    [train_id, train_name, cost, total_seats],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).send(`Train modified with ID: ${results}`);
    }
  );
};

const deleteTrain = (req, res) => {
  const id = req.body.id;

  pool.query(
    "DELETE FROM trains WHERE train_id = $1",
    [id],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).send(`Train deleted with ID: ${id},   ${results}`);
    }
  );
};

// const loginUser = (req, res) => {
//   const { username, password } = req.body;

//   pool.query(
//     "SELECT consumer_id, username, address, phone FROM trains WHERE username=$1 AND password=$2",
//     [username, password],
//     (error, results) => {
//       if (error) {
//         return res.status(400).json({
//           success: false,
//           error: error.name,
//           message: error.message,
//         });
//       }
//       res.status(200).json(results.rows);
//     }
//   );
// };

module.exports = {
  getTrains,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
};
