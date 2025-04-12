import {generateFoodMap} from "./MongoGrabber.js";
// const food = require('./MongoGrabber.js');

async function CalorieDetector(time, location, index){
    // const foodList = await food.generateFoodMap(time, location);
    const foodList = await generateFoodMap(time, location);
    console.log("Grabbing Grains");
    const grain = foodList.get('grains')[index];
    const fruits = foodList.get('fruits')[index];
    const protein = foodList.get('proteins')[index];
    const result = [];
    result[0] = grain;
    result[1] = fruits;
    result[2] = protein;
    return result;

}

const fuck = await CalorieDetector("lunch", "yahen", 0);
console.log(fuck);

