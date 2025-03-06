const express = require('express');

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Now we're able to receive the JSON data inside our controllers under req.body
app.use(bodyParser.json());
app.use('/api/v1/workouts',v1WorkoutRouter);

app.listen(PORT,()=>{
    console.log(`API is listening on port ${PORT}`);
});