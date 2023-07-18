const express = require("express")
const bookRoutes = require("./routes/books.js")
const cookieParser = require("cookie-parser")
const sessionMid = require("express-session")
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(sessionMid({
    secret: "SDFSDFLKFFKFKFFKDSDFDF",
    resave: false,
    saveUninitialized: false,
}))
app.use(logger)
app.use(bookRoutes)

function logger(req,res,next) { 
    console.log(`${req.method} : ${req.url}`)
    next()
}

app.listen(3000, (err) => {
    if (err) console.log(err)
    console.log(`Server is running`)
})