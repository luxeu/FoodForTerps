// Import Express:
const express = require("express");

const {
    getYahFood,
    getSouthFood,
    get251Food,
    getNutrition,
} = require("./controller.cjs");

const router = express.Router();

router.get("/yah", getYahFood);
router.get("/south", getSouthFood);
router.get("/251", get251Food);
router.get("/nutrition", getNutrition);

module.exports = router;