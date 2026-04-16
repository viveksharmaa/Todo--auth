const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Frontend")));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

app.listen(5000, () => console.log("Server running on port 5000"));