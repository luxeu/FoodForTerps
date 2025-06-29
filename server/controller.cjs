// Import Mongoose:
const mongoose = require("mongoose");

// Import mongoosegrabber


// Import data model for user objects:
const General = require("../server/algorithm/GeneralSchema");
const Nutrition = require("../server/algorithm/NutritionSchema");

const getYahFood = async (req, res) => {
    const allFoods = await General.find({name : "Yahentamitsi"});
    // const allFoods = await generateFoodMap("lunch", "Yahentamitsi");
    res.status(200).json(allFoods);
}
;

const getSouthFood = async (req, res) => {
    const allFoods = await General.find({name : "South Campus" });

    res.status(200).json(allFoods);
}
;

const get251Food = async (req, res) => {
    const allFoods = await General.find({name : "251 North" });

    res.status(200).json(allFoods);
};

const getNutrition = async (req, res) => {
    const allNutrition = await Nutrition.find({});

    res.status(200).json(allNutrition);
};

module.exports = {
    getYahFood,
    getSouthFood,
    get251Food,
    getNutrition,
};