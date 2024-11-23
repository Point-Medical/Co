import express, { Request, Response } from "express";
import morgan from "morgan";
import { sendMail } from "./send-mail";
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  return next();
});
app.use(morgan("dev"));
app.post("/api/v1/send-email", sendMail);
app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

export default app;
