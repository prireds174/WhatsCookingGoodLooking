// ============================================
//                   DEPENDENCIES
// ============================================
const express = require('express')
const app = express()
const PORT = 8000
//const Recipe = require('./models/recipes')
const Recipes = require('./models/testrecipe')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/easypeasy"
mongoose.connect(URI, {}, () => console.log("mongoose connected!" + URI))


// ============================================
//                   CONFIGURATION
// ============================================
app.set('view engine', 'ejs')
app.use('/views', express.static('views'))




// ============================================
//                   MIDDLEWARE
// ============================================
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


// ============================================
//                   7 "RESTful" routes 
// ============================================

// ***************Index*Route*********************
app.get('/easypeasy', (req, res) => {
    Recipes.find({}, (err, foundRecipe) => {
        console.log(foundRecipe)
        res.render('index.ejs', {
            recipes: foundRecipe
        })
    })
    // res.send('easypeasy right?')
})





// ***************Home*Route*********************

// ***************New*Route*********************
app.get('/easypeasy/new', (req, res) => {
    //res.send('our new recipes!!!🥗')
    res.render('new.ejs')
})

// ***************Show*Route*********************
app.get('/easypeasy/:id', (req, res) => {
    const id = req.params.id
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        if (err) {
            res.send(err)
        } else {
            res.render("show.ejs", { recipe: foundRecipe })
        }
    })
    //res.send('show my recipes')
    //console.log('show my recipes')
    //res.render("show.ejs")
})

// ***************Edit*Route*********************
app.get('/easypeasy/:id/edit', (req, res) => {
    Recipes.findById(req.params.id, (err, recipeToEdit) => {
        if (err) {
            res.send(err)
        } else {
            res.render("edit.ejs", {
                recipe: recipeToEdit,
            });
        }
    })
    //res.send('edit my recipes!!')
})

// ***************Create*Route*********************
app.post('/easypeasy', (req, res) => {
    //res.send('Create new recipe!')
    Recipes.create(req.body, (err, createdRecipe) => {
        res.redirect('/easypeasy')
        console.log(err)

    })

})

// ***************Update*Route*********************
app.put('/easypeasy/:id', (req, res) => {
    // res.send('Update our new recipe!!')
    Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRecipe) => {
        if (err) {
            res.send(err)
        }
        console.log(updatedRecipe)
        res.redirect(`/easypeasy/${updatedRecipe.id}`);
    })
})

// ***************Delete*Route*********************
app.delete('/easypeasy/:id', (req, res) => {
    const deleteRecipe = (err, deleteMsg) => {
        console.log(deleteMsg)
        res.redirect('/easypeasy')
    }
    Recipes.findByIdAndDelete(req.params.id, deleteRecipe)
})

// ***************Start*Server*******************
app.listen(PORT, () => console.log(`Listening on ${PORT}`))







module.exports = Recipes