import express from "express";
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import Tableroutes from './src/routes/index.js'

const app = express();
dotenv.config();
const port = process.env.PORT || 2000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("server running...");
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err, connection) => {
  if (err) console.log(err);
  console.log("Database connected successfully");
});

app.listen(2000, () => {
  console.log("Port Listening", 2000);
});

const db = {
  query: (text, params) => pool.query(text, params),
};

export default db;
