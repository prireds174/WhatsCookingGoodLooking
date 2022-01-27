const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: {
        type: String, require: true, default: "untitled"
    },
    ingredients: [String],
    totalTime: {
        type: [String] //minutes
    },
    instructions: {
        type: [String]
    },
    img:{
        type: String
    }

})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
