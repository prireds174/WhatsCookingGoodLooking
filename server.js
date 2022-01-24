// ============================================
//                   DEPENDENCIES
// ============================================
const express = require('express')
const app = express()
const PORT = 8000
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






// ***************Home*Route*********************





// ***************Start*Server*******************
app.listen(PORT, () => console.log(`Listening on ${PORT}`))