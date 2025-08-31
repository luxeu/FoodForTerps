// import express from 'express';
require("express");

// Import & enable dotenv in the file:
require("dotenv").config();

const cal = require("../server/algorithm/CalorieDetector.js");

// Express app:
const express = require("express");
const app = express();

// Import Mongoose:
const mongoose = require("mongoose");

// Import & apply cors package:
const cors = require("cors");
app.use(cors()); // more on .use() method below...

/* Assign routes (which we will later define in respective files), 
  to variables (in my app so far, : */
const routes = require("./routes.cjs");

// MIDDLEWARE

/* .use() is a method on an Express app. It mounts the specified 
middleware function(s) at the specified path: the middleware 
function is executed when the base of the requested path matches path */

/* If any request has data that it sends to the server, 
   the code on the next line attaches it to request object, 
   so we can access it in request handler */
app.use(express.json());

/* Whenever an HTTP request is made to a certain endpoint/path,
   log the path & type of request to console (seen in terminal) */
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
// Attach defined routes to their corresponding endpoints:
app.use("/api", routes);
// app.use("/palz/events", eventRoutes);
// app.use("/palz/messages", messageRoutes);

// Define the API endpoint for CalorieDetector
// This endpoint will handle requests to generate meal data based on query parameters 
// do not use the other routes like /api/yah etc
app.get('/api', async (req, res) => {
  try {
    // Extract query parameters from the request
    const { time, location, index, minCalories, maxCalories } = req.query;

    // Call CalorieDetector with the provided parameters
    const result = await cal(
      time || "lunch", // Default to "lunch" if not provided
      location || "Yahentamitsi", // Default to "Yahentamitsi" if not provided
      parseInt(index, 10) || 0, // Default to 0 if not provided
      parseInt(minCalories, 10) || 0, // Default to 0 if not provided
      parseInt(maxCalories, 1000) || 2000 // Default to 2000 if not provided
    );
    // New thing:
    // call generateFoodMap
    // change caloriedetector and dietdetector to take a map and return a trimmed map
    

    res.json({ meal: result });
  } catch (err) {
    console.error("Error in CalorieDetector:", err);
    res.status(500).json({ error: "Failed to generate meal data" });
  }
});

// Connect to Mongoose:
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    // Listen for requests only after connecting to DB:
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & listening on port ${process.env.PORT}!`);
    });
  })
  // If there's an error connecting, we will see that in the terminal:
  .catch((error) => console.log(error));

// Serve static files from the React app
const path = require("path");
app.use(express.static(path.join(__dirname, "../website/build")));

// Add a catch-all route to serve index.html for frontend routes (must be last)
app.get(/(.*)/, (req, res) => {
  // If the request starts with /api, skip to next middleware
  if (req.path.startsWith("/api")) return res.status(404).send("API endpoint not found");
  res.sendFile(path.join(__dirname, "../website/build", "index.html"));
});
