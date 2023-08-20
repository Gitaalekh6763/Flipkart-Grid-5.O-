const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/DB");
const path = require("path");
const buyerRoutes = require("./routes/buyerRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");

const allowedOrigins = ["http://localhost:3000"];

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

// app.use('/api/user/',)

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send("Shree Ganesh");
});

app.use("/api/user", buyerRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/admin", adminRoutes);



const port = 5000;
const server = app.listen(port, console.log(`Server is running on ${port}`));
