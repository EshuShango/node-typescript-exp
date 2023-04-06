import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response): void => {
  const age: number = 33;

  res.json({ message: "Hello World!" });
});

app.listen(3001, (): void => {
  console.log("Server running on port 3001");
});
