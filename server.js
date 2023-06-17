import express from "express";
import connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();

const app = express();

dotenv.config();

app.use(cors());

//default route is empty
app.use("/", Route);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (error) {
      res.statusCode(500).send(err);
    }
  );
});

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL =
  process.env.MONGODB_URI ||
  `mongodb://${username}:${password}@ac-etbvcow-shard-00-00.pi2qqnu.mongodb.net:27017,ac-etbvcow-shard-00-01.pi2qqnu.mongodb.net:27017,ac-etbvcow-shard-00-02.pi2qqnu.mongodb.net:27017/?ssl=true&replicaSet=atlas-q8wi1d-shard-0&authSource=admin&retryWrites=true&w=majority`;
connection(URL);

app.listen(PORT, () =>
  console.log(`Server is running suceessfully on port ${PORT}`)
);

DefaultData();
