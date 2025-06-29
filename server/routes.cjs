// Import Express:
const express = require("express");

const {
    getYahFood,
    getSouthFood,
    get251Food,
    getNutrition,
} = require("./controller.cjs");

const router = express.Router();

router.get("/", getYahFood);
router.get("/", getSouthFood);
router.get("/", get251Food);
router.get("/", getNutrition);

module.exports = router;