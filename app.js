require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const app = express()

const PORT = process.env.PORT || 8080


// app.use(morgan('dev'))


function customMiddleWare (req, res, next){

      if(req.url === "/help"){

        res.send("<h1>This page has been blocked by admin</h1>")
      }

      next()
}


app.use(customMiddleWare)


app.get("/about", morgan('dev'), (req, res) =>{

    res.send("<h1>This is about page</h1>")
})

app.get("/help", (req, res) =>{

    res.send("This is you help page")
})

app.get("/", (req, res) =>{

    res.send("<h1>Hello shibu</h1>")
})

app.get("*", (req, res) =>{

    res.send('<h1>404 Page Not Found !</h1>')
})

app.listen(PORT, () =>{

    console.log(`Server is running at http://localhost:${PORT}`)
})