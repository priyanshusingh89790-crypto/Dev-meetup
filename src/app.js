require('dotenv').config()
const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const dbConnection = require('./config/database')
const authRouter = require('./route/auth.route');
const userRouter = require('./route/user.route')
const connectionRuter = require('./route/connection.route')

const port = process.env.PORT;

dbConnection();

app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/connection', connectionRuter)

app.listen(port, ()=> {
    console.log(`DevMeetUp application is running on port : ${port}`);
});