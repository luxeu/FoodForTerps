// import {generateFoodMap} from "./MongooseGrabber.js";
const mongoose = require("./MongooseGrabber.js");
// const food = require('./MongoGrabber.js');


async function CalorieDetector(time, location, index, calorieMin, calorieMax){
    // const foodList = await food.generateFoodMap(time, location);
    const foodList = await mongoose.generateFoodMap(time, location);
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

// export default CalorieDetector;


// const test = await CalorieDetector("lunch", "yahen", 0, 500, 1000);
// console.log(test);

async function DietDetector(time, location, dietMap){
    const foodList = await mongoose.generateFoodMap(time, location);

    // const grain = foodList.get('grains');
    // const fruits = foodList.get('fruits');
    // const protein = foodList.get('proteins');
    const result = [];
    for (let i = 0; i < foodList.get('grains').length; i++) {
        console.log("inside");
        if(dietMap.get("diary") && foodList.get('grains')[i].diary != dietMap.get("diary")){
            continue;
        }
        if(dietMap.get("egg") && foodList.get('grains')[i].egg != dietMap.get("egg")){
            continue;
        }
        if(dietMap.get("fish") && foodList.get('grains')[i].fish != dietMap.get("fish")){
            continue;
        }
        if(dietMap.get("gluten") && foodList.get('grains')[i].gluten != dietMap.get("gluten")){
            continue;
        }
        if(dietMap.get("nuts") && foodList.get('grains')[i].nuts != dietMap.get("nuts")){
            continue;
        }
        if(dietMap.get("sesame") && foodList.get('grains')[i].sesame != dietMap.get("sesame")){
            continue;
        }
        if(dietMap.get("shellfish") && foodList.get('grains')[i].shellfish != dietMap.get("shellfish")){
            continue;
        }
        if(dietMap.get("soy") && foodList.get('grains')[i].soy != dietMap.get("soy")){
            continue;
        }
        if(dietMap.get("halal") && foodList.get('grains')[i].halal != dietMap.get("halal")){
            continue;
        }
        if(dietMap.get("local") && foodList.get('grains')[i].local != dietMap.get("local")){
            continue;
        }
        if(dietMap.get("smart") && foodList.get('grains')[i].smart != dietMap.get("smart")){
            continue;
        }
        if(dietMap.get("vegan") && foodList.get('grains')[i].vegan != dietMap.get("vegan")){
            continue;
        }
        if(dietMap.get("vegetarian") && foodList.get('grains')[i].vegetarian != dietMap.get("vegetarian")){
            continue;
        }
        console.log("grains");
        result[0] = foodList.get('grains')[i];

    }
    
    for (let i = 0; i < foodList.get('fruits').length; i++) {
        // console.log("IN FRUIT");
        if(dietMap.get("diary") && foodList.get('fruits')[i].diary != dietMap.get("diary")){
            continue;
        }
        if(dietMap.get("egg") && foodList.get('fruits')[i].egg != dietMap.get("egg")){
            continue;
        }
        if(dietMap.get("fish") && foodList.get('fruits')[i].fish != dietMap.get("fish")){
            continue;
        }
        if(dietMap.get("gluten") && foodList.get('fruits')[i].gluten != dietMap.get("gluten")){
            continue;
        }
        if(dietMap.get("nuts") && foodList.get('fruits')[i].nuts != dietMap.get("nuts")){
            continue;
        }
        if(dietMap.get("sesame") && foodList.get('fruits')[i].sesame != dietMap.get("sesame")){
            continue;
        }
        if(dietMap.get("shellfish") && foodList.get('fruits')[i].shellfish != dietMap.get("shellfish")){
            continue;
        }
        if(dietMap.get("soy") && foodList.get('fruits')[i].soy != dietMap.get("soy")){
            continue;
        }
        if(dietMap.get("halal") && foodList.get('fruits')[i].halal != dietMap.get("halal")){
            continue;
        }
        if(dietMap.get("local") && foodList.get('fruits')[i].local != dietMap.get("local")){
            continue;
        }
        if(dietMap.get("smart") && foodList.get('fruits')[i].smart != dietMap.get("smart")){
            continue;
        }
        if(dietMap.get("vegan") && foodList.get('fruits')[i].vegan != dietMap.get("vegan")){
            continue;
        }
        if(dietMap.get("vegetarian") && foodList.get('fruits')[i].vegetarian != dietMap.get("vegetarian")){
            continue;
        }
        result[1] = foodList.get('fruits')[i];
    }
   
    for (let i = 0; i < foodList.get('proteins').length; i++) {
        if(dietMap.get("diary") && foodList.get('proteins')[i].diary != dietMap.get("diary")){
            continue;
        }
        if(dietMap.get("egg") && foodList.get('proteins')[i].egg != dietMap.get("egg")){
            continue;
        }
        if(dietMap.get("fish") && foodList.get('proteins')[i].fish != dietMap.get("fish")){
            continue;
        }
        if(dietMap.get("gluten") && foodList.get('proteins')[i].gluten != dietMap.get("gluten")){
            continue;
        }
        if(dietMap.get("nuts") && foodList.get('proteins')[i].nuts != dietMap.get("nuts")){
            continue;
        }
        if(dietMap.get("sesame") && foodList.get('proteins')[i].sesame != dietMap.get("sesame")){
            continue;
        }
        if(dietMap.get("shellfish") && foodList.get('proteins')[i].shellfish != dietMap.get("shellfish")){
            continue;
        }
        if(dietMap.get("soy") && foodList.get('proteins')[i].soy != dietMap.get("soy")){
            continue;
        }
        if(dietMap.get("halal") && foodList.get('proteins')[i].halal != dietMap.get("halal")){
            continue;
        }
        if(dietMap.get("local") && foodList.get('proteins')[i].local != dietMap.get("local")){
            continue;
        }
        if(dietMap.get("smart") && foodList.get('proteins')[i].smart != dietMap.get("smart")){
            continue;
        }
        if(dietMap.get("vegan") && foodList.get('proteins')[i].vegan != dietMap.get("vegan")){
            continue;
        }
        if(dietMap.get("vegetarian") && foodList.get('proteins')[i].vegetarian != dietMap.get("vegetarian")){
            continue;
        }
        result[2] = foodList.get('proteins')[i];
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