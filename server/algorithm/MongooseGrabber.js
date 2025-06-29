import General  from "./GeneralSchema.js";
import Nutrition from "./NutritionSchema.js";
import mongoose from 'mongoose';

// mongoose.connection.once("open", function() {
//   console.log("MongoDB connection established");

//   const pain = await SampleModel.find().lean().exec();

//   console.log(pain);
// // });
// await mongoose.connect(vars.env.DB_URI, {dbname: "FoodForTerps"});
// var SampleModel = mongoose.model('AHHHHH', mongoose.Schema({},{strict: false}), "General")
// var NutritionModel = mongoose.model("FUUUUUU", mongoose.Schema({}, {strict: false}), "Nutrition");
// const pain = await SampleModel.find({name: "Yahentamitsi"}).lean().exec();
// const nut = await NutritionModel.find().lean().exec();
// // console.log(pain);
// const foodlist = pain[0].lunch_list;
// console.log(foodlist);
async function sortedInsert(array, element) {
    if(array.length == 0) {
        array.push(element);
        // console.log("pushed");
    }
    else {
        var i = 0;
        while(i < array.length && element.nutrition.Calories > array[i].nutrition.Calories) {
            i++;
        }
        array.splice(i,0,element);
        // console.log("spliced at " + i);
    }
    return;
}

function FoodObject(general, nutrition) {
    this.name = general.name;
    this.location = general.location;
    this.dairy = general.dairy;
    this.egg = general.egg;
    this.fish = general.fish;
    this.gluten = general.gluten;
    this.nuts = general.nuts;
    this.sesame = general.sesame;
    this.shellfish = general.shellfish;
    this.soy = general.soy;
    this.halal = general.halal;
    this.local = general.local;
    this.smart = general.smart;
    this.vegan = general.vegan;
    this.vegetarian = general.vegetarian;
    this.food_group = nutrition.food_group;
    this.nutrition = nutrition.nutrition;

}


export async function generateFoodMap(mealtime, hall) {
    // await mongoose.connect(vars.env.DB_URI, {dbname: "FoodForTerps"});
    // var SampleModel = mongoose.model('AHHHHH', mongoose.Schema({},{strict: false}), "General")
    // var NutritionModel = mongoose.model("FUUUUUU", mongoose.Schema({}, {strict: false}), "Nutrition");
    // const pain = await SampleModel.find({name: hall}).lean().exec();
    // const nut = await NutritionModel.find().lean().exec();
    


    var map = new Map();
    try {
        const foodlist = pain[0].lunch_list;
        console.log(foodlist);
        // const nutrition = await Nutrition.findOne
        // console.log(general);
        // console.log(nutrition);
        // return;
        // const hall_doc = await general.findOne({name: hall});
        // const nut_doc = await nutrition.find({});
        // console.log(nut_doc.toArray());
        var food_list;
        if(mealtime == "breakfast") {
            food_list = pain[0].breakfast_list;
        }
        else if(mealtime == "lunch") {
            food_list = pain[0].lunch_list;
        }
        else if(mealtime == "dinner") {
            food_list = pain[0].dinner_list;
        }
        // console.log(food_list);
        var grains = [];
        var proteins = [];
        var fruits = [];
        var other = [];
        console.log("Starting Pushing Foods");
        for(const food of food_list) {
        // food_list.forEach(async food => {
            var foodNut = await NutritionModel.findOne({name: "Nutrition | Label - " + food.name + " "}).lean().exec();
            // var foodNut = await nutrition.findOne({name: "Nutrition | Label - " + food.name + " "});
            // var foodNut = findFoodNut("Nutrition | Label - " + food.name + " ", );
            // console.log(foodNut);
            if(foodNut != null) {
                var foodObj = new FoodObject(food, foodNut);
                // console.log(foodObj.name + " grabbed");
                if(foodObj.food_group == "Protein") {
                    await sortedInsert(proteins, foodObj);
                }
                else if (foodObj.food_group == "Grain") {
                    await sortedInsert(grains, foodObj);
                }
                else if (foodObj.food_group == "Fruits") {
                    await sortedInsert(fruits, foodObj);
                }
                else {
                    await sortedInsert(other, foodObj);
                }
                // console.log(foodObj.name + " sorted");
            }
            else {
                // console.log(food.name + " not found");
            }
        }

        map.set("grains", grains);
        map.set("proteins", proteins);
        map.set("fruits", fruits);
        map.set("other", other);
        // return map;
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
        await mongoose.connection.close();
    }
    console.log("Returning map");
    // console.log(map);
    return map;
} 

// const stupid = await generateFoodMap('lunch', "Yahentamitsi");
// console.log(stupid);