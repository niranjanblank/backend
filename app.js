const express = require('express')
const { sequelize } = require('./models/index')
const userRouter = require('./routes/userRouter')
const restaurantRouter = require('./routes/restaurantRouter')
const foodItemRouter = require('./routes/foodItemRouter')
const reviewRouter = require('./routes/reviewRouter')
const cartItemRouter = require('./routes/cartItemRouter')
const cors = require('cors');
const app = express()
app.use(cors({
  origin: '*'
}));
app.use(express.json())
app.use(express.static(__dirname + '/public'));


app.use('/api/user',userRouter)
app.use('/api/restaurant',restaurantRouter)
app.use('/api/fooditem',foodItemRouter)
app.use('/api/review', reviewRouter)
app.use('/api/cartitem',cartItemRouter)

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