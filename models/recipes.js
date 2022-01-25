const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: {
        type: String, requrie: true, default: "untitled"
    },
    ingredients: [String],
    totalTime: {
        type: Number //minutes
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe