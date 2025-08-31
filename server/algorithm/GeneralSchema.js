const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const generalSchema = new Schema({
    name: String,
    breakfast_list: [{
        name: String,
        location: String,
        dairy: Boolean,
        egg: Boolean,
        fish: Boolean,
        gluten: Boolean,
        nuts: Boolean,
        sesame: Boolean,
        shellfish: Boolean,
        soy: Boolean,
        halal: Boolean,
        local: Boolean,
        smart: Boolean,
        vegan: Boolean,
        vegetarian: Boolean
    }],
    lunch_list: [{
        name: String,
        location: String,
        dairy: Boolean,
        egg: Boolean,
        fish: Boolean,
        gluten: Boolean,
        nuts: Boolean,
        sesame: Boolean,
        shellfish: Boolean,
        soy: Boolean,
        halal: Boolean,
        local: Boolean,
        smart: Boolean,
        vegan: Boolean,
        vegetarian: Boolean
    }],
    dinner_list: [{
        name: String,
        location: String,
        dairy: Boolean,
        egg: Boolean,
        fish: Boolean,
        gluten: Boolean,
        nuts: Boolean,
        sesame: Boolean,
        shellfish: Boolean,
        soy: Boolean,
        halal: Boolean,
        local: Boolean,
        smart: Boolean,
        vegan: Boolean,
        vegetarian: Boolean
    }]
});


module.exports = mongoose.model('General', generalSchema, 'FoodForTerps.General');
