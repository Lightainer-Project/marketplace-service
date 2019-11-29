import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser"

const app: Application = express();
const port: number = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});