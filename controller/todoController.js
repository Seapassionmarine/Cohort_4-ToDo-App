const todoModel = require('../model/todoUserModel')
const userModel = require('../model/userModel')

exports.createContent = async (req,res)=>{
    try {
      const {userId} = req.user 
      const {Title,Content} = req.body 
      const user = await userModel.findById(userId)
      if(!user){
        return res.status(404).json({
            message: `User not found`
        })
      }
      //create an instance of the content
      const todo = new todoModel({
        Title,
        Content
      })

      todo.user = userId
      user.todo.push(todo._id)

      //save document to database
      await todo.save()
      await user.save()

      res.status(200).json({
        message: `Todo content created successfully`,
        data:todo
      })
    } catch (err) {
        res.status(500).json(err.message)
    }
}

exports.getOneContent = async (req,res)=>{
    try {
        const userId = req.params.userId
        const getOneContent = await todoModel.findOne({userId})
        if(!getOneContent){
            return res.status(404).json({
                message:"content not found"
            })
        }
        res.status(200).json({
            message:"content below"
        })
       }catch (err) {
                    res.status(500).json(err.message)
                }
            }

exports.getAllContent = async (req,res)=>{
    try {
        const {userId} = req.user
        const contents = await todoModel.find({user: userId})

        res.status(200).json({
            message: `All contents available`,
            data: contents
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
}

exports.updateContent = async (req,res)=>{
    try {
        const {userId} = req.user
        const {todoId} = req.params
        const {Title,Content} = req.body
        const user = await userModel.findById(userId)
      if(!user){
        return res.status(404).json({
            message: `User not found`
        })
      }
      const todo = await todoModel.findById(todoId)
      if(!todo){
        return res.status(404).json({
            message: `Todo content not found`
        })
      }

      if(todo.user.toString() !== userId.toString()){
        return res.status(404).json({
            message: `Not allowed to update a content by another user`
        })
      }

      const data = {
        Title: Title || todo.Title,
        Content: Content || todo.Content
      }

      const updatedContent = await todoModel.findByIdAndUpdate(todoId,data, {new:true})
      res.status(200).json({
        message: `Content updated successfully`,
        data: updatedContent
      })

    } catch (err) {
        res.status(500).json(err.message)
    }
}

exports.deleteContent = async (req,res)=>{
    try {
        const {todoId} = req.params
        const todo = await todoModel.findById(todoId)
      if(!todo){
        return res.status(404).json({
            message: `Todo content not found`
        })
      }

      const deletedContent = await todoModel.findByIdAndDelete(todoId)
      res.status(200).json({
        message: `Content deleted successfully`
      })
    } catch (err) {
        res.status(500).json(err.message)
    }
}