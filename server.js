// ============================================
//                   DEPENDENCIES
// ============================================
const express = require('express')
const app = express()
const recipesController = require('./controllers/recipes.js')
const PORT = process.env.PORT || 8000
//const Recipe = require('./models/recipes')
// const Recipes = require('./models/Testrecipe')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/easypeasy"


mongoose.connect(MONGODB_URI)
mongoose.connection.on('connected',()=>{
    console.log('connected to mongoDB: '+MONGODB_URI.split('/').pop())
})

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
//              7 "RESTful" routes 
// ============================================


// =============Recipes Controller=============
app.use('/easypeasy/recipe', recipesController)
// ============================================

// ==============================================

// ***************Home*Route*********************
app.get('/easypeasy', (req, res) => {
    
    res.render('home.ejs')
})

// ***************Start*Server*******************
app.listen(PORT, () => console.log(`Listening on ${PORT}`))


// module.exports = Recipes