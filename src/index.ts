import express, { Application } from "express";
import bodyParser from "body-parser";

require('dotenv').config()

import connect from "./DatabaseConnector";
import router from "./Router";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

connect("mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_COLL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});