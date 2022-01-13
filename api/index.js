const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('DB Connection successfull!')).catch(err => console.log(err))

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)


app.listen(8800, () => {
    console.log('Backend server is running!')
})