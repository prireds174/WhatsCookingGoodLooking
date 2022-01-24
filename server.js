// ============================================
//                   DEPENDENCIES
// ============================================
const express = require('express')
const app = express()
const PORT = 8000
const Recipe = require('./model/recipes')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/easypeasy"
mongoose.connect(URI, {}, ()=> console.log("mongoose connected!" +URI))


// ============================================
//                   CONFIGURATION
// ============================================
app.set('view engine', 'ejs')
app.use('/views', express.static('views'))




// ============================================
//                   MIDDLEWARE
// ============================================
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// ============================================
//                   7 "RESTful" routes 
// ============================================

// ***************Index*Route*********************
app.get('/easypeasy', (req,res)=> {
    res.send('easypeasy right?')
})





// ***************Home*Route*********************

// ***************New*Route*********************
app.get('/easypeasy/new', (req,res)=>{
    //res.send('our new recipes!!!🥗')
    res.render('new.ejs')
})

// ***************Show*Route*********************
app.get('/easypeasy/:id', (req,res)=>{
    //res.send('show my recipes')
    //console.log('show my recipes')
    res.render("show.ejs")
})

// ***************Edit*Route*********************
app.get('/easypeasy/:id/edit', (req,res)=>{
    res.send('edit my recipes!!')
})

// ***************Create*Route*********************
app.post('/easypeasy', (req,res)=>{
    //res.send('Create new recipe!')
    Recipe.create(req.body,(err, createdRecipe)=>{
        res.redirect('/easypeasy')
        console.log(err)
    })
    
})

// ***************Update*Route*********************
app.put('/easypeasy/:id', (req,res)=> {
    res.send('Update our new recipe!!')
})

// ***************Delete*Route*********************
app.delete('/easypeasy/:id', (req,res)=>{
    res.send("Delete our recipe!")
})

// ***************Start*Server*******************
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

module.exports = Recipe