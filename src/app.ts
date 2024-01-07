import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRouts } from "./app/modules/students/student.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

//application route
app.use("/api/v1/students", studentRouts);

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
