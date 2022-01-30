// ================================================
//                   DEPENDENCIES
// ================================================
const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipes.js');

// ================================================


// ***************Index*Route**********************

router.get('/', (req, res) => {
    Recipe.find({}, (err, foundRecipe) => {
        console.log(foundRecipe)
        res.render('recipes/index.ejs', {
            recipes: foundRecipe
        })
    })
    
})

// ================================================
// ***************Search*Route*********************
router.get('/result', (req, res) => {
    res.redirect('/easypeasy/')
})

// ================================================
// ***************New*Route************************
router.get('/new', (req, res) => {
    res.render('recipes/new.ejs')
})
// ***************Show*Route***********************
router.get('/:id', (req, res) => {
    const id = req.params.id
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (err) {
            res.send(err)
        } else {
            console.log(foundRecipe)
            res.render("recipes/show.ejs", { recipe: foundRecipe })

        }
    })
})
// ***************Edit*Route***********************
router.get('/:id/edit', (req, res) => {
    Recipe.findById(req.params.id, (err, recipeToEdit) => {
        if (err) {
            res.send(err)
        } else {
            res.render("recipes/edit.ejs", {
                recipe: recipeToEdit,
            });
        }
    })
})

// ***************Create*Route*********************
router.post('/', (req, res) => {
    Recipe.create(req.body, (err, createdRecipe) => {
        res.redirect('/easypeasy/recipe')
        console.log(err)

    })

})

// ***************Update*Route*********************
router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRecipe) => {
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
    Recipe.findByIdAndDelete({ _id: req.params.id }, deleteRecipe)
})

// ================================================

// ***************search*Route*********************
router.post('/result', (req, res) => {
    console.log("post result page!!!!!")
    Recipe.aggregate([
        {
          '$search': {
            'index': 'default',
            'text': {
              'query': req.body.ingredients,
              'path': {
                'wildcard': '*'
              }
            }
          }
        }
      ], (err, foundFood)=>{
          if(err){
              res.send(err)
          } else {
            res.render('recipes/result.ejs', {recipes: foundFood})
          }
      })
    // Recipe.find({ ingredients: req.body.ingredients }, "name", (err, foodName) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(foodName)
    //         res.render('recipes/result.ejs', { recipes: foodName })
    //     }
    // })

})

// =================About========================


module.exports = router;