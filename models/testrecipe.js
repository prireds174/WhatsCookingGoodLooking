const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const recipesSchema = new mongoose.Schema({
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


const Recipes = mongoose.model('Recipes', recipesSchema)

module.exports = Recipes


const priscilla = ({
    name: "Grilled Cheese",
    ingredients: "Bread, Cheese, Butter",
    totalTime: "10 mins",
    instructions:
        "Take bread, spread butter on both slices of bread, on one side, heat pan, place one slice of bread on pan, add cheese, place other slice of bread on top. Let side cook for 3 mins. Flip and toast for 3 mins. Once both sides are toasted, your cheesy goodness is good to go",
    img:"https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-3.jpg"

})

function main() {
    // Your code here!
    console.log("Main function is running")

    // Delete all data from the Company collection
    Recipes.deleteMany({}, (err, deletedResponse) => {
        if(err) return console.log(err)
        // if(err) return res.send(err)
        console.log(`${deletedResponse.deletedCount} number of companies have deleted.`)

        Recipes.create(priscilla, (err, createdRecipe)=> {
            if(err) return console.log(err)
            console.log(`Created the ${createdRecipe}`)
            }
        )
    }
)
}
main()
