const express = require("express") //import
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },
    {
        healthy: true
    }

]
}];

app.use(express.json());

//Getting kidneys data

app.get("/", function(req, res) {
    
    const johnKidneys = users[0].kidneys;
    const numOfKid = johnKidneys.length
    const healthyKidneys = johnKidneys.filter(kidney => kidney.healthy);
    const numOfHealthyKid = healthyKidneys.length;
    const numOfUnhealthyKid = numOfKid - numOfHealthyKid;
    res.json({
        numOfKid,
        numOfHealthyKid,
        numOfUnhealthyKid,
        
    })
})
// adding kidneys

app.post("/", function(req, res) {

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"

    })
})


// Replacing unhealthy kidneys to healthy

app.put("/", function(req, res) {
    for(let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing unhealthy kidneys

app.delete("/", function(req, res) {
    //if there is no unhealthy kidney then return 411 error msg else return done ms //we can also do same for put if there is unhealthy
    if(isThereAtleastOneHealthyKid()) {
        users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
        res.json({
        msg: "Done!"
    })
    } else {
        res.status(411).json({
            msg: "You have n no bad kidneys"
        })
    }
    
})

function isThereAtleastOneHealthyKid() {
    let atleastOneHeathyKid = false;
    for(let i = 0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneHeathyKid = true;
        }
    }
    return atleastOneHeathyKid;
}

app.listen(9008)
