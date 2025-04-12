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

async function DietDetector(time, location, dietMap){
    const foodList = await generateFoodMap(time, location);

    // const grain = foodList.get('grains');
    // const fruits = foodList.get('fruits');
    // const protein = foodList.get('proteins');
    const result = [];
    for (let i = 0; i < foodList.get('grains').length; i++) {
        if(foodList.get('grains')[i].diary == dietMap.get("diary")){
            continue;
        }
        if(foodList.get('grains')[i].egg == dietMap.get("egg")){
            continue;
        }
        if(foodList.get('grains')[i].fish == dietMap.get("fish")){
            continue;
        }
        if(foodList.get('grains')[i].gluten == dietMap.get("gluten")){
            continue;
        }
        if(foodList.get('grains')[i].nuts == dietMap.get("nuts")){
            continue;
        }
        if(foodList.get('grains')[i].sesame == dietMap.get("sesame")){
            continue;
        }
        if(foodList.get('grains')[i].shellfish == dietMap.get("shellfish")){
            continue;
        }
        if(foodList.get('grains')[i].soy == dietMap.get("soy")){
            continue;
        }
        if(foodList.get('grains')[i].halal == dietMap.get("halal")){
            continue;
        }
        if(foodList.get('grains')[i].local == dietMap.get("local")){
            continue;
        }
        if(foodList.get('grains')[i].smart == dietMap.get("smart")){
            continue;
        }
        if(foodList.get('grains')[i].vegan == dietMap.get("vegan")){
            continue;
        }
        if(foodList.get('grains')[i].vegetarian == dietMap.get("vegetarian")){
            continue;
        }
        result[0] = foodList.get('grains')[i];

    }
    for (let i = 0; i < foodList.get('fruits').length; i++) {
        if(foodList.get('fruits')[i].diary == dietMap.get("diary")){
            continue;
        }
        if(foodList.get('fruits')[i].egg == dietMap.get("egg")){
            continue;
        }
        if(foodList.get('fruits')[i].fish == dietMap.get("fish")){
            continue;
        }
        if(foodList.get('fruits')[i].gluten == dietMap.get("gluten")){
            continue;
        }
        if(foodList.get('fruits')[i].nuts == dietMap.get("nuts")){
            continue;
        }
        if(foodList.get('fruits')[i].sesame == dietMap.get("sesame")){
            continue;
        }
        if(foodList.get('fruits')[i].shellfish == dietMap.get("shellfish")){
            continue;
        }
        if(foodList.get('fruits')[i].soy == dietMap.get("soy")){
            continue;
        }
        if(foodList.get('fruits')[i].halal == dietMap.get("halal")){
            continue;
        }
        if(foodList.get('fruits')[i].local == dietMap.get("local")){
            continue;
        }
        if(foodList.get('fruits')[i].smart == dietMap.get("smart")){
            continue;
        }
        if(foodList.get('fruits')[i].vegan == dietMap.get("vegan")){
            continue;
        }
        if(foodList.get('fruits')[i].vegetarian == dietMap.get("vegetarian")){
            continue;
        }
        result[1] = foodList.get('fruits')[i];
    }

    for (let i = 0; i < foodList.get('proteins').length; i++) {
        if(foodList.get('proteins')[i].diary == dietMap.get("diary")){
            continue;
        }
        if(foodList.get('proteins')[i].egg == dietMap.get("egg")){
            continue;
        }
        if(foodList.get('proteins')[i].fish == dietMap.get("fish")){
            continue;
        }
        if(foodList.get('proteins')[i].gluten == dietMap.get("gluten")){
            continue;
        }
        if(foodList.get('proteins')[i].nuts == dietMap.get("nuts")){
            continue;
        }
        if(foodList.get('proteins')[i].sesame == dietMap.get("sesame")){
            continue;
        }
        if(foodList.get('proteins')[i].shellfish == dietMap.get("shellfish")){
            continue;
        }
        if(foodList.get('proteins')[i].soy == dietMap.get("soy")){
            continue;
        }
        if(foodList.get('proteins')[i].halal == dietMap.get("halal")){
            continue;
        }
        if(foodList.get('proteins')[i].local == dietMap.get("local")){
            continue;
        }
        if(foodList.get('proteins')[i].smart == dietMap.get("smart")){
            continue;
        }
        if(foodList.get('proteins')[i].vegan == dietMap.get("vegan")){
            continue;
        }
        if(foodList.get('proteins')[i].vegetarian == dietMap.get("vegetarian")){
            continue;
        }
        result[2] = foodList.get('proteins')[i];
    }
    
    // result[0] = grain;
    // result[1] = fruits;
    // result[2] = protein;
    return result;
}

var map = new Map();
map.set("diary", true);
map.set("egg", false);
map.set("fish", true);
map.set("gluten", false);
map.set("nuts", false);
map.set("sesame", true);
map.set("shellfish", false);
map.set("soy", true);
map.set("halal", true);
map.set("local", false);
map.set("smart", false);
map.set("vegan", false);
map.set("vegetarian", false);

const check = await DietDetector("lunch", "yahen", map);
console.log(check);