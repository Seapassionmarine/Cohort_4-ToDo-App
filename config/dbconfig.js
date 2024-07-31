const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.dbUrl
mongoose.connect(url)
.then(()=> {
    console.log('Database connected successfully')
})
.catch((err) => {
    console.log(err.message);
})