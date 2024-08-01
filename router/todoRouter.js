const express = require('express')
const { createContent, getAllContent, getOneContent, deleteContent, updateContent } = require('../controller/todoController')
const { authenticate } = require('../middleware/auth')

const router = express.Router()

router.post('create-content',authenticate,createContent)
router.get('/one-content/:todoId',authenticate,getOneContent)
router.get('/all-content',authenticate,getAllContent)
router.put('/update-content/:todoId',authenticate,updateContent)
router.delete('/delete-content/:todoId',authenticate,deleteContent)

module.exports = router