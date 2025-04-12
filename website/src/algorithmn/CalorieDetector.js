import MongoGrabber from "./MongoGrabber";

function CalorieDetector(time, location, index){
    const foodList = run(time, location);
    const result = [];
    // const foodList = new Map();
    // foodList.set('Grains', ["Food1","Food2","Food3","Food4","Food5"]);
    // foodList.set('Fruits', ["Food6","Food7","Food8","Food9","Food10"]);
    // foodList.set('Protein', ["Food11","Food12","Food13","Food14","Food15"]);
    // const foodList = [];

    const grain = foodList.get('Grains')[index];
    const fruit = foodList.get('Fruits')[index];
    const protein = foodList.get('Protein')[index];
    
    result[0] = grain;
    result[1] = fruit;
    result[2] = protein;
    return result
}

console.log(CalorieDetector(2));

