const pool = require("../psql");

const getUsers = (req, res) => {
  pool.query("SELECT * FROM train_user", (error, results) => {
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

const getUserById = (req, res) => {
  // console.log(req.params.id);
  //   res.send("jslkdfjslf");
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM train_user WHERE u_id = $1",
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

// const updateUser = (req, res) => {
//   // const id = parseInt(req.params.id);
//   const { u_id, name, age, phone, email } = req.body;

//   pool.query(
//     "UPDATE train_user SET name = $2, age = $3, phone = $4, email = $5 WHERE u_id = $1",
//     [u_id, name, age, phone, email],
//     (error, results) => {
//       if (error) {
//         return res.status(400).json({
//           success: false,
//           error: error.name,
//           message: error.message,
//         });
//       }
//       res.status(200).send(results.rows);
//     }
//   );
// };

const deleteUser = (req, res) => {
  const id = req.body.id;

  pool.query(
    "DELETE FROM train_user WHERE u_id = $1",
    [id],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  pool.query(
    "SELECT u_id FROM train_user WHERE username=$1 AND password=$2",
    [username, password],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: error.message,
        });
      }
      res.status(200).json(results.rows[0].u_id);
    }
  );
};

const registerUser = (req, res) => {
  const { username, password, name } = req.body;

  pool.query(
    "INSERT INTO train_user (name,username,password) VALUES ($1, $2, $3)",
    [name, username, password],
    (error, results) => {
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.name,
          message: "user already exists",
        });
      }
      res.status(200).json(results);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  // updateUser,
  deleteUser,
  registerUser,
  loginUser,
};
