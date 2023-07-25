const express = require('express')
const ejs = require('ejs')
const path = require('path')
const sessions = require('express-session')
const routeMain = require('./Route/index.js') 

const app = express()

//view engine
app.set('view engine', 'ejs')

//static files
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public', ))
app.use(routeMain)




app.listen(3000, ()=>{
    console.log('server is running')
})