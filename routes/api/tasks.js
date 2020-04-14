const expess = require('express')
const router = expess.Router()
const Task=require('../../models/Task')


//@route GET api/tasks
//@desc get all tasks
router.get('/',async (req, res) => {
    try {
        const tasks = await Task.find().sort({date:-1})
        // if (tasks.length === 0) {
        //    return res.status(401).json({message:'Not tasks found !!'})
        // }
        res.status(200).json(tasks)
        
    } catch (error) {
        console.log(error.message)
       res.status(500).send('Server Error') 
    }
  
})

//@route POST api/tasks
//@desc create  task
router.post('/',async (req, res) => {
    const {name}=req.body
    try {
        
        const newTask = new Task({ name })
        await newTask.save()
        res.json(newTask)
    } catch (error) {
        console.log(error.message)
       res.status(500).send('Server Error') 
    }
  
})

//@route DELETE api/tasks
//@desc delete  task
router.delete('/:id',async (req, res) => {
  
    try {
        
        const newTask = await Task.findById(req.params.id)
        if (!newTask) {
            res.status(404).json({message:'Task not found !!'})
        }
       newTask.remove()
        res.json({message:`${newTask.name} has been deleted!!`})
    } catch (error) {
        console.log(error.message)
       res.status(500).send('Server Error') 
    }
  
})

module.exports=router