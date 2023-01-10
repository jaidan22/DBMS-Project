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
    "SELECT p.name,p.seat_no,p.p_id,p.sch_id,ts.train_id,s.station_name as source, ss.station_name as destination FROM passenger p,train_schedules ts,stations s, stations ss WHERE p.sch_id=ts.sch_id AND p.u_id = $1 and ts.source = s.station_id and ts.destination = ss.station_id",
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
    "INSERT INTO passenger (seat_no,sch_id,email,age,phone,u_id,name) VALUES ($1, $2, $3,$4, $5, $6, $7)",
    [seat_no, sch_id, email, age, phone, u_id, name],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(201).send(results.rows);
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
  const id = req.body.p_id;

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

const getPassengerByPNR = (req, res) => {
  const id = parseInt(req.params.pnr);

  pool.query(
    "SELECT p.name,p.seat_no,p.p_id,p.sch_id,ts.train_id,s.station_name as source, ss.station_name as destination FROM passenger p,train_schedules ts,stations s, stations ss WHERE p.sch_id=ts.sch_id AND p.p_id = $1 and ts.source = s.station_id and ts.destination = ss.station_id",
    [id],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).send(results.rows);
    }
  );
};

module.exports = {
  getPassengers,
  getPassengerById,
  cancelPassenger,
  addPassenger,
  getPassengerByPNR,
};
