import {generateFoodMap} from "./MongoGrabber.js";
// const food = require('./MongoGrabber.js');

async function CalorieDetector(time, location, index, calorieMin, calorieMax){
    // const foodList = await food.generateFoodMap(time, location);
    const foodList = await generateFoodMap(time, location);
    // console.log("Grabbing Grains");
    const grains = foodList.get('grains');
    const fruits = foodList.get('fruits');
    const proteins = foodList.get('proteins');
    const length = Math.min(grains.length, fruits.length, proteins.length);
    var grain, fruit, protein;
    for (var i = 0; i < length; i++) {
        var totalCalories = grains[i].nutrition.Calories + fruits[i].nutrition.Calories + proteins[i].nutrition.Calories;
        console.log(grains[i].nutrition.Calories + " "+ fruits[i].nutrition.Calories +" "+ proteins[i].nutrition.Calories)
        if( totalCalories >= calorieMin && totalCalories <= calorieMax) {
            if (index == 0) {
                console.log("found Match");
                grain = grains[i];
                fruit = fruits[i];
                protein = proteins[i];
                break;
            }
            else {
                index--;
            }
        }
    }
    const result = [];
    result[0] = grain;
    result[1] = fruit;
    result[2] = protein;
    return result;

}


const fuck = await CalorieDetector("lunch", "yahen", 0, 500, 1000);
console.log(fuck);

