import {MongoClient} from "mongodb"

async function sortedInsert(array, element) {
    if(array.length == 0) {
        array.push(element);
        console.log("pushed");
    }
    else {
        var i = 0;
        while(i < array.length && element.nutrition.Calories > array[i].nutrition.Calories) {
            i++;
        }
        array.splice(i,0,element);
        console.log("spliced at " + i);
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
    const uri = vars.env.DB_URI

    const client = new MongoClient(uri);
    var map = new Map();
    try {
        const database = client.db('FoodForTerps');
        const general = database.collection('General');
        const nutrition = database.collection('Nutrition');
        
        const hall_doc = await general.findOne({name: hall});
        // const nut_doc = await nutrition.find({});
        // console.log(nut_doc.toArray());
        var food_list;
        if(mealtime == "breakfast") {
            food_list = hall_doc.breakfast_list;
        }
        else if(mealtime == "lunch") {
            food_list = hall_doc.lunch_list;
        }
        else if(mealtime == "dinner") {
            food_list = hall_doc.dinner_list;
        }
        // console.log(food_list);
        var grains = [];
        var proteins = [];
        var fruits = [];
        var other = [];
        console.log("Starting Pushing Foods");
        for(const food of food_list) {
        // food_list.forEach(async food => {
            var foodNut = await nutrition.findOne({name: "Nutrition | Label - " + food.name + " "});
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
        await client.close();
    }
    console.log("Returning map");
    // console.log(map);
    return map;
} 
// var wmap = await generateFoodMap("lunch", "yahen").catch(console.dir);
// console.log("PLEEASSE");
// console.log(wmap);



// // TODO
// /*
//     Food Grabber
//     JSON.parse to convert to objects
//         - Retrieve general collection
//             - Get all foods in mealtime list
//             - List of parsed objects
//         - Retrieve nutrition collection
//             - match food to nutrition_value object
//             - map of general objects to nutrition objects?
//             - Retrieve food_group value
//             - store in map of lists depending on that value
//             - do a sorted insert        
// */