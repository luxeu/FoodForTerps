// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const GeneralSchema = new Schema({
    name: {
        type : String
    },
    location: {
        type : String
    },
    dairy: {
        type : Boolean
    },
    egg: {
        type : Boolean
    },
    fish: {
        type : Boolean
    },
    gluten: {
        type : Boolean
    },
    nuts: {
        type : Boolean
    },
    sesame: {
        type : Boolean
    },
    shellfish: {
        type : Boolean
    },
    soy: {
        type : Boolean
    },
    halal: {
        type : Boolean
    },
    local: {
        type : Boolean
    },
    smart: {
        type : Boolean
    },
    vegan: {
        type : Boolean
    },
    vegetarian: {
        type : Boolean
    }
});
const NutritionSchema = new Schema({
    name: {
        type : String
    },
    food_group: {
        type: String
    },
    nutrition: {
        total_fat: {
            type: Number
        },
        total_carbs: {
            type : Number
        },
        total_carbs_daily: {
            type : Number
        },
        total_sugars: {
            type : Number
        },
        cholesterol: {
            type : Number
        },
        sodium: {
            type : Number
        },
        sodium_daily: {
            type : Number
        },
        protein: {
            type : Number
        }
    }
});

const General = model("General", GeneralSchema);
const Nutrition = model("Nutrition", NutritionSchema);


function FoodObject(generalObject, nutritionObject) {
    this.general = generalObject;
    this.nutrition = nutritionObject;
}

async function main() {
    console.log("HELLOOOOO");
    mongoose.connect("mongodb+srv://syang8:tI39ghVdmISktK8U@cluster.gzowamk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
    general = await General.find({}).exec();
    nutrition = await Nutrition.find({}).exec();
    console.log(general);
    console.log(nutrition);
    return
    // test = new FoodObject(JSON.parse("RAH"), JSON.parse("RAH"))
}

main();
// TODO
/*
    Food Grabber
    JSON.parse to convert to objects
        - Retrieve general collection
            - Get all foods in mealtime list
            - List of parsed objects
        - Retrieve nutrition collection
            - match food to nutrition_value object
            - map of general objects to nutrition objects?
            - Retrieve food_group value
            - store in map of lists depending on that value
            - do a sorted insert

        
*/