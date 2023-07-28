const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const postsRouter = require('./routes/posts.router')
const authRouter = require('./routes/auth.router')
const petsRouter = require('./routes/pets.router')
// const companyRouter = require('./routes/company.router')
// const pharmacyRouter = require('./routes/pharmacy.router')


app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/pets", petsRouter)
// app.use("/api/v1/company", companyRouter)
// app.use("/api/v1/pharmacy", pharmacyRouter)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})