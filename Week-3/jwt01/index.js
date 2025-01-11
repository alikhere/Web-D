const mongoose =  require("mongoose");
//
mongoose.connect("mongodb+srv://alikhere:Ali8540005317@cluster0.josue.mongodb.net/users_app?retryWrites=true&w=majority&appName=Cluster0")

const express = require("express");
const app = express();
app.use(express.json())

 
const User = mongoose.model('Users', { name: String, email: String, password: String});

app.post("/signup", async function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    app.post("/signup", async function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    if(existingUser) {
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        name: name, 
        email: username, 
        password: password
    });
    user.save()

    res.json({
        "msg" : "User created successfully"
    })
})

    const user = new User({
        name: name, 
        email: username, 
        password: password
    });
    user.save()

    res.json({
        "msg" : "User created successfully"
    })
})


app.listen(3000)
