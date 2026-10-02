const express = require("express");
const authRoutes=require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const postRoutes=require("./routes/path.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/create",postRoutes);

module.exports = app;