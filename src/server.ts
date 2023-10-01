// src/server.ts
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express!");
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello, API!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
