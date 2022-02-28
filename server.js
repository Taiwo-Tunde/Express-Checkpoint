const express = require('express')
const app = express()
app.set('view engine', 'ejs')

 app.get("/", (req, res) => {
     console.log('here')
     res.render('Home')
 })

 app.get("/Service", (req, res) => {
    console.log('here')
    res.render('Service')
})

app.get("/Contact", (req, res) => {
    console.log('here')
    res.render("Contact")
})


app.listen(3000)