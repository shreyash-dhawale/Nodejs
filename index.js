const express = require("express");
const app = express();
const cors = require('cors');
require('./db');
const userModel = require('./user');
const port = 3000;
app.use(express.json());
app.use(cors());
app.post('/signup', (req, res)=>{
let user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password 

})
user.save().then((result)=>{
    res.send({message : "User has been signed up successfully"});
}).catch((err)=>{
    res.send(err);
})
})
app.post('/login', (req, res)=>{
    userModel.findOne({email: req.body.email, password: req.body.password}).then((result)=>{
        if(result){
            res.send({message: "User has been logged in successfully"});
        }else{
            res.send({error: "Invalid credentials"});
        }
    }).catch((err)=>{
        res.send(err);
    })
})


app.listen(port, () => { console.log(`Server is running on port ${port}`)});