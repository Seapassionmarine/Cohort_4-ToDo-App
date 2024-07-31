const express = require('express')
const { createContent, getAllContent, getOneContent, deleteContent } = require('../controller/todoController')
const { authenticate } = require('../middleware/auth')

const todoRouter = express.Router()

todoRouter.post('create-content',authenticate,createContent)
todoRouter.get('/one-content',getOneContent)
todoRouter.get('/all-content',getAllContent)
todoRouter.delete('/delete-content',deleteContent)

module.exports = todoRouter