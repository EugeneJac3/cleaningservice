const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const authRoutes = require("./Routes/AuthRoutes");
const UserModel = require('./Models/UserModel')
require("dotenv").config();
const cookieParser = require("cookie-parser");


app.listen(3001, () => {
    console.log("Server is working");
});

mongoose.connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successful")
}).catch(err =>{
    console.log(err.message)
})

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json());
app.use("/", authRoutes)


app.get("/", function(req,res){
    res.send("Server is running in browser");
})

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
});

app.post("/createUser", async (req,res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();
    

    res.json(user)

})


