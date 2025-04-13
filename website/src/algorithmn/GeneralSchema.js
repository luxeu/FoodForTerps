import mongoose from 'mongoose'

const {Schema, model} = mongoose;

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


const General = mongoose.model('General', generalSchema);

export default General;