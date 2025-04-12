const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
    totalFat: {
        type: String,
        required: true
    },
    totalCarbs: {
        type: String,
        required: true
    },
    totalCarbsDaily: {
        type: String,
        required: true
    },
    totalSugars: {
        type: String,
        required: true
    },
    cholesterol: {
        type: String,
        required: true
    },
    sodium: {
        type: String,
        required: true
    },
    sodiumDaily: {
        type: String,
        required: true
    },
    protien: {
        type: String,
        required: true
    }
});
const Nutrition = mongoose.model('Nutrition', nutritionSchema);
module.exports = Nutrition;
