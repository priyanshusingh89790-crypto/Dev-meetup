require('dotenv').config()
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const dbConnection = require('./config/database')
const authRouter = require('./route/auth.route');
const userRouter = require('./route/user.route')
const connectionRuter = require('./route/connection.route')

const port = process.env.PORT || 5000;

dbConnection();

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/connection', connectionRuter)

app.listen(port, ()=> {
    console.log(`DevMeetUp application is running on port : ${port}`);
});
