import mongoose from 'mongoose'

const {Schema, model} = mongoose;

const nutritionSchema = new Schema({
    name: String,
    food_group: String,
    nutrition: {
        Calories: Number,
        total_fat: Number,
        total_carbs: Number,
        total_carbs_daily: Number,
        total_sugars: Number,
        cholesterol: Number,
        sodium: Number,
        sodium_daily: Number,
        protein: Number
    }
});

const Nutrition = model('Nutrition', nutritionSchema);

export default Nutrition;