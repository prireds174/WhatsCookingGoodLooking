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
    }

}, {timestamps: true})


const Recipes = mongoose.model('Recipes', recipesSchema)

module.exports = Recipes


const priscilla = ({
    name: "Grilled Cheese",
    ingredients: ["Bread", "Cheese", "Butter"],
    totalTime: "10 mins",
    instructions:
        "Take bread, spread butter on both slices of bread, on one side, heat pan, place one slice of bread on pan, add cheese, place other slice of bread on top. Let side cook for 3 mins. Flip and toast for 3 mins. Once both sides are toasted, your cheesy goodness is good to go"

})

function main() {
    console.log("Main function is running")
    // await search()
    // Delete all data from the Company collection
    Recipes.deleteMany({}, (err, deletedResponse) => {
        if(err) return console.log(err)
        // if(err) return res.send(err)
        console.log(`${deletedResponse.deletedCount} number of companies have deleted.`)

        Recipes.create(priscilla, (err, createdRecipe)=> {
            if(err) return console.log(err)
            console.log(`Created the ${createdRecipe}`)

        })
    })
}
main()
// function search(x) {
//     Recipes.find( 
//         {ingredients: { "$in" : [x] }}, 
//         "name", (err, docs) => {
//         if(err) return console.log(err)
//         console.log(docs)
//     })
// }
// search("Cheese")




// router.post('/search', (req, res) => {
//     // 1. make a mongoose query. 
//     // 2. 
// })


