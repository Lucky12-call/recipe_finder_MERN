import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

// default middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (_, res) => {
  res.send("API working");
});

app.use("/api/user", userRouter);

dbConnection().then(() => {
  app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
});
