const mongoose =  require("mongoose");

mongoose.connect("mongodb+srv://alikhere:Ali8540005317@cluster0.josue.mongodb.net/users_app?retryWrites=true&w=majority&appName=Cluster0")

 
const User = mongoose.model('Users', { name: String, email: String, password: String});

const user = new User({ name: 'Ali Khurshid', email: 'alikhere@gmail.com', password: 'Ali@321'});
user.save()
