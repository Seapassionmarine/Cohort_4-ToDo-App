const express = require('express')
require('./config/dbconfig')
const cors = require('cors')
const router = require('./router/userRouter')
const todoRouter = require('./router/todoRouter')

const app = express()
app.use(cors({origin: "*"}))
app.use(express.json())
app.use('/api/v1/user/',router)
app.use('/api/v1/user/',todoRouter)

const PORT = process.env.port || 6068
app.listen(PORT,()=>{
    console.log(`Server listening to port: ${PORT}`);
})