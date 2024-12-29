const express = require("express") 
const app = express();


// this os lenghty way as in both case ride 1 and 2 they are cheacking the same thing age so we can use middlewere fn which has access to req,res and whic check eligiblity criteria not need to check in every route i.e ride1&2  
// function isOldEnough(age) {
//     if(age >= 14)
//         return true;
//     else return false;
// }

// app.get("/ride1", function(req, res) {
//     if(isOldEnough(req.query.age)) {
//         res.json({
//             msg: "You have successfull riden the ride"
//         })
//     } else {
//         res.status(411).json({
//             mag: "You are not age yet"
//         })
//     }
// })

// app.get("/ride2", function(req, res) {
//     if(isOldEnough(req.query.age)) {
//         res.json({
//             msg: "You have successfull riden the ride"
//         })
//     } else {
//         res.status(411).json({
//             mag: "You are not age yet"
//         })
//     }
// })


function isOldEnoughMiddleware(req, res,next) {
    age = req.query.age;
    if(age >= 14) {
        next();
    } else {

        res.status(404).json({
            msg: "You are not age yet"
       })

    }
}

app.get("/ride1", isOldEnoughMiddleware,function(req, res) {
    res.status(411).json({
        mag: "You are not age yet"
    })
})

app.get("/ride2",isOldEnoughMiddleware, function(req, res) {
    res.status(411).json({
        mag: "You are not age yet"
    })
})

app.listen(3000)

// if we want to use isOldEnoughMiddleware is many routes then we can use wrire app.use(isOldEnoughMiddleware) above all the route to whom we want to tigger this middleware fn frist then we don't need to pass this fn individually in those route