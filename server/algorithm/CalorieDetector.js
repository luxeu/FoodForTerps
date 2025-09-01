// import {generateFoodMap} from "./MongooseGrabber.js";
const mongoose = require("./MongooseGrabber.js");
// const food = require('./MongoGrabber.js'];


function CalorieDetector(foodList, index, calorieMin, calorieMax){
    // const foodList = await food.generateFoodMap(time, location);
    // console.log("Grabbing Grains");
    console.log(foodList);
    console.log(index);
    console.log(calorieMin); // this is straight up wrong - defaults to 0
    console.log(calorieMax);
    const grains = foodList['grains'];
    const fruits = foodList['fruits'];
    const proteins = foodList['proteins'];
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

// export default CalorieDetector;


// const test = await CalorieDetector("lunch", "yahen", 0, 500, 1000);
// console.log(test);

function DietDetector(foodList, dietMap){
    // const foodList = await mongoose.generateFoodMap(time, location);

    // const grain = foodList['grains'];
    // const fruits = foodList['fruits'];
    // const protein = foodList['proteins'];
    const result = [];
    for (let i = 0; i < foodList['grains'].length; i++) {
        console.log("inside");
        if(dietMap.get("diary") && foodList['grains'][i].diary != dietMap.get("diary")){
            continue;
        }
        if(dietMap.get("egg") && foodList['grains'][i].egg != dietMap.get("egg")){
            continue;
        }
        if(dietMap.get("fish") && foodList['grains'][i].fish != dietMap.get("fish")){
            continue;
        }
        if(dietMap.get("gluten") && foodList['grains'][i].gluten != dietMap.get("gluten")){
            continue;
        }
        if(dietMap.get("nuts") && foodList['grains'][i].nuts != dietMap.get("nuts")){
            continue;
        }
        if(dietMap.get("sesame") && foodList['grains'][i].sesame != dietMap.get("sesame")){
            continue;
        }
        if(dietMap.get("shellfish") && foodList['grains'][i].shellfish != dietMap.get("shellfish")){
            continue;
        }
        if(dietMap.get("soy") && foodList['grains'][i].soy != dietMap.get("soy")){
            continue;
        }
        if(dietMap.get("halal") && foodList['grains'][i].halal != dietMap.get("halal")){
            continue;
        }
        if(dietMap.get("local") && foodList['grains'][i].local != dietMap.get("local")){
            continue;
        }
        if(dietMap.get("smart") && foodList['grains'][i].smart != dietMap.get("smart")){
            continue;
        }
        if(dietMap.get("vegan") && foodList['grains'][i].vegan != dietMap.get("vegan")){
            continue;
        }
        if(dietMap.get("vegetarian") && foodList['grains'][i].vegetarian != dietMap.get("vegetarian")){
            continue;
        }
        console.log("grains");
        result[0] = foodList['grains'][i];

    }
    
    for (let i = 0; i < foodList['fruits'].length; i++) {
        // console.log("IN FRUIT");
        if(dietMap.get("diary") && foodList['fruits'][i].diary != dietMap.get("diary")){
            continue;
        }
        if(dietMap.get("egg") && foodList['fruits'][i].egg != dietMap.get("egg")){
            continue;
        }
        if(dietMap.get("fish") && foodList['fruits'][i].fish != dietMap.get("fish")){
            continue;
        }
        if(dietMap.get("gluten") && foodList['fruits'][i].gluten != dietMap.get("gluten")){
            continue;
        }
        if(dietMap.get("nuts") && foodList['fruits'][i].nuts != dietMap.get("nuts")){
            continue;
        }
        if(dietMap.get("sesame") && foodList['fruits'][i].sesame != dietMap.get("sesame")){
            continue;
        }
        if(dietMap.get("shellfish") && foodList['fruits'][i].shellfish != dietMap.get("shellfish")){
            continue;
        }
        if(dietMap.get("soy") && foodList['fruits'][i].soy != dietMap.get("soy")){
            continue;
        }
        if(dietMap.get("halal") && foodList['fruits'][i].halal != dietMap.get("halal")){
            continue;
        }
        if(dietMap.get("local") && foodList['fruits'][i].local != dietMap.get("local")){
            continue;
        }
        if(dietMap.get("smart") && foodList['fruits'][i].smart != dietMap.get("smart")){
            continue;
        }
        if(dietMap.get("vegan") && foodList['fruits'][i].vegan != dietMap.get("vegan")){
            continue;
        }
        if(dietMap.get("vegetarian") && foodList['fruits'][i].vegetarian != dietMap.get("vegetarian")){
            continue;
        }
        result[1] = foodList['fruits'][i];
    }
   
    for (let i = 0; i < foodList['proteins'].length; i++) {
        if(dietMap.get("diary") && foodList['proteins'][i].diary != dietMap.get("diary")){
            continue;
        }
        if(dietMap.get("egg") && foodList['proteins'][i].egg != dietMap.get("egg")){
            continue;
        }
        if(dietMap.get("fish") && foodList['proteins'][i].fish != dietMap.get("fish")){
            continue;
        }
        if(dietMap.get("gluten") && foodList['proteins'][i].gluten != dietMap.get("gluten")){
            continue;
        }
        if(dietMap.get("nuts") && foodList['proteins'][i].nuts != dietMap.get("nuts")){
            continue;
        }
        if(dietMap.get("sesame") && foodList['proteins'][i].sesame != dietMap.get("sesame")){
            continue;
        }
        if(dietMap.get("shellfish") && foodList['proteins'][i].shellfish != dietMap.get("shellfish")){
            continue;
        }
        if(dietMap.get("soy") && foodList['proteins'][i].soy != dietMap.get("soy")){
            continue;
        }
        if(dietMap.get("halal") && foodList['proteins'][i].halal != dietMap.get("halal")){
            continue;
        }
        if(dietMap.get("local") && foodList['proteins'][i].local != dietMap.get("local")){
            continue;
        }
        if(dietMap.get("smart") && foodList['proteins'][i].smart != dietMap.get("smart")){
            continue;
        }
        if(dietMap.get("vegan") && foodList['proteins'][i].vegan != dietMap.get("vegan")){
            continue;
        }
        if(dietMap.get("vegetarian") && foodList['proteins'][i].vegetarian != dietMap.get("vegetarian")){
            continue;
        }
        result[2] = foodList['proteins'][i];
    }
    return result;
}

function GetMealCalories(meal) {
    var calories = 0;
    for(const food of meal) {
        calories += food.nutrition.Calories;
    }
    return calories;
}

function GetMealCarbs(meal) {
    var carbs = 0;
    for(const food of meal) {
        carbs += food.nutrition.total_carbs;
    }
    return carbs;
}
function GetMealFat(meal) {
    var fat = 0;
    for(const food of meal) {
        fat += food.nutrition.total_fat;
    }
    return fat;
}
function GetMealProtein(meal) {
    var protein = 0;
    for(const food of meal) {
        protein += food.nutrition.protein;
    }
    return protein;
}
function GetMealSugars(meal) {
    var sugar = 0;
    for(const food of meal) {
        sugar += food.nutrition.total_sugars;
    }
    return sugar;
}


// var map = new Map();
// map.set("diary", false);
// map.set("egg", false);
// map.set("fish", false);
// map.set("gluten", false);
// map.set("nuts", true);
// map.set("sesame", false);
// map.set("shellfish", false);
// map.set("soy", true);
// map.set("halal", false);
// map.set("local", false);
// map.set("smart", false);
// map.set("vegan", false);
// map.set("vegetarian", false);

// const check = await DietDetector("lunch", "yahen", map);
// console.log(check);

module.exports = CalorieDetector;
// console.log("FUCKKSKSKDFLKLSJK");
// const test = await CalorieDetector("lunch", "Yahentamitsi", 0, 500, 1000);
// console.log(test);
// console.log("This is the meal")