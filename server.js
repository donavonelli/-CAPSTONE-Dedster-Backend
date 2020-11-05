// external imports
const express = require("express");
const cors = require("cors");
// internal imports
const routes = require("./routes");
const db = require('./models');
const port = process.env.PORT || 3001;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors());

// middleware - API routes
app.use("/colleges", routes.colleges);

// Auth Routes
app.use("/auth", routes.auth);

// Profiles Routes
app.use("/profiles", routes.profile);

// Services Routes
app.use("/services", routes.services)

// Posts Routes
app.use("/posts", routes.posts)

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));