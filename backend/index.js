const express = require("express");
const app = express();
const colors = require("colors");
const mainRouter = require("./routes/index");
const userRouter = require("./routes/user");

const connectDB = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//app.use('/api/v1', mainRouter);
app.use('/api/v1/user', userRouter);
console.log('after login');
connectDB();

const PORT = 3000;

app.listen(PORT, console.log('listening on port 3000'));
