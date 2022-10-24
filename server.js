require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use((req,res,next)=>{
    res.locals.data = {}
    next()
})


//this allows us to edit and delete
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//MongoDB
//TO DO: include the db models
const db = require('./models/db')
db.once('open', () =>{
    console.log('connected to MongoDB Atlas')
})

//Viewengine
app.engine('jsx',require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

/* Start Middleware */
app.use(express.json())
app.use(express.static('public'))
app.use('/pokemon', require('./controllers/rounteController'))
/* End Middleware */

/* Port */
app.listen(3000, () =>{
    console.log('Listening on port 3000')
})