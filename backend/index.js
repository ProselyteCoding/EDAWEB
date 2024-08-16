import express from "express";
import todoRoutes from "./routes/todos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { initializeDatabase } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

// 初始化数据库
initializeDatabase();

const app = express();

// 根路径重定向到 /login
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

//监听后端服务器端口
app.listen(process.env.PORT, () => {
  console.log(`Connected to backend on http://localhost:${process.env.PORT}`);
});
