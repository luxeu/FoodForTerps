import express from 'express';
import { CalorieDetector } from '../website/src/algorithmn/CalorieDetector.js';

const app = express();

app.get('/api', async (req, res) => {
  try {
    // Extract query parameters from the request
    const { time, location, index, minCalories, maxCalories } = req.query;

    // Call CalorieDetector with the provided parameters
    const result = await CalorieDetector(
      time || "lunch", // Default to "lunch" if not provided
      location || "251 North", // Default to "251 North" if not provided
      parseInt(index, 10) || 0, // Default to 0 if not provided
      parseInt(minCalories, 10) || 0, // Default to 0 if not provided
      parseInt(maxCalories, 10) || 2000 // Default to 2000 if not provided
    );

    res.json({ meal: result });
  } catch (err) {
    console.error("Error in CalorieDetector:", err);
    res.status(500).json({ error: "Failed to generate meal data" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
import express from 'express';
import { CalorieDetector } from '../website/src/algorithmn/CalorieDetector.js';

const app = express();

app.get('/api', async (req, res) => {
  try {
    const result = await CalorieDetector("lunch", "251 North", 0, 0, 2000);
    res.json({ meal: result });
  } catch (err) {
    console.error("Error in CalorieDetector:", err);
    res.status(500).json({ error: "Failed to generate meal data" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
