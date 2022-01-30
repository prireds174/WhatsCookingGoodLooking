// ============================================
//                   DEPENDENCIES
// ============================================
const express = require('express')
const app = express()
const recipesController = require('./controllers/recipes.js')
const PORT = process.env.PORT || 8000
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
// app.get('*',(req,res)=>res.render('404'))
// ***************Home*Route*********************
app.get('/easypeasy/about', (req,res)=>{
    res.render('about.ejs')
})

app.get('/', (req,res)=>{
    res.redirect('/easypeasy')
})


// app.get('*',(req,res)=>res.render('404'))

app.get('/easypeasy', (req, res) => {
    
    res.render('home.ejs')
})

// ***************Start*Server*******************
app.listen(process.env.PORT || PORT, () => console.log(`Listening on ${PORT}`))


