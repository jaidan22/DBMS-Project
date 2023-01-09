const pool = require("../psql");

const getTrains = (req, res) => {
  // console.log(req);
  pool.query(
    "SELECT t.train_id,t.train_name,st.station_name as source,stt.station_name as destination,s.avail_seat,t.cost,s.sch_id FROM trains t,train_schedules s,stations st,stations stt where t.train_id=s.train_id and s.source = st.station_id and s.destination = stt.station_id",
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

const getTrainById = (req, res) => {
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

module.exports = {
  getTrains,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
};
