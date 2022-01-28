
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
    

}, {timestamps: true})


const Recipes = mongoose.model('Recipes', recipesSchema)

module.exports = Recipes


const priscilla = ({
    name: "Chicken & Veggies",
    ingredients: ["Chicken", " Brussel Sprouts", " Microwaveable Sweet Potato", " Seasonings of your Choice"],
    totalTime: "30 mins",
    instructions: "Warm up your pan and season your chicken with salt and pepper and other seasonings you prefer. Pre-heat air fryer to 375 for your sprouts. Season your Brussel Sprouts with salt, pepper, oil and balsalmic vinegar. Toss and place in air fryer for 10 mins. Take Potato and microwave for time suggested. Once pan is heated, lightly oil pan and place chicken. Cook each side for 10 mins. Combine all cooked items and enjoy.",
    img: "https://i.imgur.com/bl4hf32.jpeg"

})
const derek = ({
    name: "French Toast",
    ingredients: ["Bread", " Egg", " Butter", " Milk"],
    totalTime: "10 mins",
    instructions: 
        "Beat egg, vanilla and cinnamon in shallow dish with wire whisk. Stir in milk. Dip bread in egg mixture, turning to coat both sides evenly. Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides. Serve with Easy Spiced Syrup (recipe follows), if desired. Voila, easy French toast.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k6dOdXrnGwGTG9qsL37gN0itP7pjJeZg3A&usqp=CAU"
})
const simple1 = ({
    name: "Frosted Flakes",
    ingredients: ["Milk", " Cereal"],
    totalTime: "1 mins",
    instructions:
        "Prepare a bowl. Pour your milk first in the bowl, then pour your cereal.",
    img:"https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/frosted-flakes.jpg"  
})
const michael = ({
    name: 'Steak',
    ingredients: ["Ribeye", " Salt", " Pepper"],
    totalTime: "15 minutes",
    instructions: 
        "Grab your steak pat it dry with a paper towel then salt each side of the steak and allow to rest for 5 minutes, while its resting heat your skillet and add a small amount of oil to cover the pan, once the steak is done resting sear the steak on both sides for roughly 5 minutes; then allow it to rest for 5 minutes afterwards. once its finished resting, slice the steak, add a few cracks of pepper to the steak and enjoy with any sides you'd like.",
    img:"https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg"
})
const taylor = ({
    name: "Weenie Bacon Bites",
    ingredients: ["Bacon", " Mini Sausages", " Toothpicks"],
    totalTime: "20 mins",
    instructions:
        "Cut bacon in half and wrap around mini sausage.Secure bacon by putting a toothpick in it. Preheat oven to 325 degrees. Arrange mini sausages in a single layer. Cook until bacon is crisp.",
    img: "https://www.tasteofhome.com/wp-content/uploads/2022/01/Sausage-Bacon-Bites_EXPS_GHBZ18_26657_E08_09_6b_based-on.jpg?fit=700,1024"
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
            
            Recipes.create(derek, (err, createdRecipe)=> {
                if(err) return console.log(err)
                console.log(`Created the ${createdRecipe}`)

                Recipes.create(simple1, (err, createdRecipe)=> {
                    if (err) return console.log(err)
                    console.log(`Created the ${createdRecipe}`)

                    Recipes.create(michael, (err, createdRecipe)=> {
                        if(err) return console.log(err)
                        console.log(`Created the ${createdRecipe}`)

                        Recipes.create(taylor, (err, createdRecipe)=> {
                            if(err) return console.log(err)
                            console.log(`Created the ${createdRecipe}`)
                        })
                    })
                })
            })
        })
    })
}
main()


