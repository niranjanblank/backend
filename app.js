const express = require('express')
const { sequelize } = require('./models/index')
const userRouter = require('./routes/userRouter')
const app = express()
app.use(express.json())

app.use('/api/user',userRouter)

port = 5000
app.listen(port,async ()=>{
    console.log(`App running on ${port}`)

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})