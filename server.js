const express = require('express')
const app = express()
const DBconnect=require('./config/db')
const tasks=require('./routes/api/tasks')
const users = require('./routes/api/users')
app.use(express.json())
DBconnect()



app.use('/api/tasks',tasks)
app.use('/api/users',users)


const PORT=process.env.PORT||5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})