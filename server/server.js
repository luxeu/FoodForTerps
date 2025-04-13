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
