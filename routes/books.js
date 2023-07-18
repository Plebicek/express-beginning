const expres = require("express")
const session = require("express-session")
const route = expres.Router()

bookObject = [
    {
        "id" : 1,
        "name": "How to become a developer",
        "pages": 321
    },
    {
        "id" : 2,
        "name": "How to write a code",
        "pages": 211
    },
    {
        "id" : 3,
        "name": "Start a perfect life",
        "pages": 510
    },
    {
        "id" : 4,
        "name": "Dont care to much",
        "pages": 210
    }
    
]

route.get("", (req,res) => {
    res.cookie("visisted", true, {
        
    })
    res.send(bookObject)
})


route.get("/book/:id", (req,res) => {
    console.log(req.cookies)
    const {pages} = req.query;
    const parsed = parseInt(pages)
    if (pages && !isNaN(parsed)) {
        const filtered = bookObject.filter((book) => book.pages >= parsed)
        res.send(filtered)
    } else {
        bookObject.forEach((book)=>{
            if(book.id == req.params.id) { 
                res.send(book)
            }
        })
    }
})

route.get("/shopping/cart", (req,res) => {
    const {cart} = req.session
    if (!cart) {
        res.send("no cart")
    } else {
        res.send(cart)
    }
})

route.post("/cart/item", (req,res) => {
    const { item, quantity } = req.body;
    const cartItem = { 
        item, quantity
    }
    const { cart } = req.session
    if (cart) {
        req.session.cart.items.push(cartItem)
    } else {
        req.session.cart =  {
            items : [cartItem]
        }
    }
    res.send(201)
})




module.exports = route