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
    img: {
        type: String
    }


}, { timestamps: true })


const Recipes = mongoose.model('Recipes', recipesSchema)

module.exports = Recipes


const priscilla = ({
    name: "Chicken & Veggies",
    ingredients: ["Chicken", "Brussel Sprouts", "Microwaveable Sweet Potato", "Seasonings of your Choice"],
    totalTime: "30 mins",
    instructions: "Warm up your pan and season your chicken with salt and pepper and other seasonings you prefer. Pre-heat air fryer to 375 for your sprouts. Season your Brussel Sprouts with salt, pepper, oil and balsalmic vinegar. Toss and place in air fryer for 10 mins. Take Potato and microwave for time suggested. Once pan is heated, lightly oil pan and place chicken. Cook each side for 10 mins. Combine all cooked items and enjoy.",
    img: "https://i.imgur.com/bl4hf32.jpeg"

})
const derek = ({
    name: "French Toast",
    ingredients: ["Bread", "Egg", "Butter", "Milk"],
    totalTime: "10 mins",
    instructions:
        "Beat egg, vanilla and cinnamon in shallow dish with wire whisk. Stir in milk. Dip bread in egg mixture, turning to coat both sides evenly. Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides. Serve with Easy Spiced Syrup (recipe follows), if desired. Voila, easy French toast."
})

function main() {
    console.log("Main function is running")
    // await search()
    // Delete all data from the Company collection
    Recipes.deleteMany({}, (err, deletedResponse) => {
        if (err) return console.log(err)
        // if(err) return res.send(err)
        console.log(`${deletedResponse.deletedCount} number of companies have deleted.`)

        Recipes.create(priscilla, (err, createdRecipe) => {
            if (err) return console.log(err)
            console.log(`Created the ${createdRecipe}`)

            Recipes.create(derek, (err, createdRecipe) => {
                if (err) return console.log(err)
                console.log(`Created the ${createdRecipe}`)
            })
        })
    })
}
main()


