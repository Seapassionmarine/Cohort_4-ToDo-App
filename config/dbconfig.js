const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.dbUrl
mongoose.connect(URL)
.then(()=> {
    console.log('Database connected successfully')
})
.catch((err) => {
    console.log(err.message);
})