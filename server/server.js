const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// Create a datavase connection

mongoose.connect('mongodb+srv://tunegd43:tunegd43@cluster0.c4bta.mongodb.net/').then(
    ()=> console.log('Database connected')
)


const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST' , 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type' , 'Authorization' , 'Cache-Control' , 'Expires' , 'Pragma'],
        credentials: true,
    })
)
app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
