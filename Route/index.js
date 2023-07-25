const express = require('express')
const route = express.Router()

users = [
    {
        user : 'vojta',
        password : 'hash',
        created : '23/07/2023'
    },
    {
        user : 'Nikola',
        password : 'hash',
        created : '23/07/2023'
    },
    {
        user : 'Adam',
        password : 'hash',
        created : '23/07/2023'
    },
    {
        user : 'Tomas',
        password : 'hash',
        created : '23/07/2023'
    }
]



route.use('', (req,res) => {
    res.render("homepage", users)
})

module.exports = route