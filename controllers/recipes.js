// ================================================
//                   DEPENDENCIES
// ================================================
const express = require('express');
const router = express.Router();

const Recipes = require('../models/Testrecipe');
// const databaseFn = require('../models/Testrecipe')
// const searchFn = require('../models/Testrecipe')

// ================================================

// ***************Index*Route**********************
router.get('/', (req, res) => {
    Recipes.find({}, (err, foundRecipe) => {
        console.log(foundRecipe)
        res.render('recipes/index.ejs', {
            recipes: foundRecipe
        })
    })
    // res.send('easypeasy right?')
})

// ================================================
// ***************Search*Route*********************
router.get('/result', (req, res) => {
    console.log("router get result page test!!!!!!!!!")
    // res.send("Here's the result page!")
    Recipes.find({}, (err, foundRecipe)=> {
        console.log(foundRecipe)
        res.render('recipes/result.ejs', { recipes: foundRecipe})
    })

})
// ================================================
// ***************New*Route************************
router.get('/new', (req, res) => {
    //res.send('our new recipes!!!🥗')
    res.render('recipes/new.ejs')
})
// ***************Show*Route***********************
router.get('/:id', (req, res) => {
    const id = req.params.id
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        if (err) {
            res.send(err)
        } else {
            res.render("recipes/show.ejs", { recipe: foundRecipe })
        }
    })
})
// ***************Edit*Route***********************
router.get('/:id/edit', (req, res) => {
    Recipes.findById(req.params.id, (err, recipeToEdit) => {
        if (err) {
            res.send(err)
        } else {
            res.render("recipes/edit.ejs", {
                recipe: recipeToEdit,
            });
        }
    })
    //res.send('edit my recipes!!')
})

// ***************Create*Route*********************
router.post('/', (req, res) => {
    //res.send('Create new recipe!')
    Recipes.create(req.body, (err, createdRecipe) => {
        res.redirect('/easypeasy/recipe')
        console.log(err)

    })

})

// ***************Update*Route*********************
router.put('/:id', (req, res) => {
    // res.send('Update our new recipe!!')
    Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRecipe) => {
        if (err) {
            res.send(err)
        }
        console.log(updatedRecipe)
        res.redirect(`/easypeasy/recipe/${updatedRecipe.id}`);
    })
})
// ***************Delete*Route*********************
router.delete('/:id/', (req, res) => {
   const deleteRecipe = (err, deleteMsg) => {
       console.log(deleteMsg)
       res.redirect('/easypeasy/recipe')
   }
   Recipes.findByIdAndDelete({_id : req.params.id}, deleteRecipe)
})

// ================================================

// ***************search*Route*********************
router.post('/result', (req, res) => {
    console.log("post result page!!!!!")
    Recipes.find({ ingredients: req.body.ingredients }, "name", (err, foodName) => {
        if(err) {
            console.log(err)
        } else {
            console.log(foodName)
            // res.send(foodName)
        }
    })
    res.redirect('/easypeasy/recipe/result')

})


module.exports = router;