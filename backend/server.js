const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const itemRoutes = require("./routes/itemRoutes");

const app = express();
// console.log({ itemRoutes });

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/items", itemRoutes);
//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("DB Error:", err));
// mongoose.connect("mongodb://127.0.0.1:27017/crudDB")
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// Server
app.listen(5002, () => console.log("Server running on port 5002"));


