const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db")
const jwt = require("jsonwebtoken");
 //if we have index file in any dic no need to specify the file name it by default import maodule form .js file
 const {jwtSecret} = require("../config")


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
        // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username, //if we know both have same name then we can say direct username
        password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const user = await Admin.find({
        username,
        password
    })
    if(user) {
        const token = jwt.sign({
            username
        }, jwtSecret);
        res.json({
            token
        })
    
    } else {
        res.status(411).json({
            message: "Incorrect email pass"
        })
    }

    const token = jwt.sign({
        username
    }, jwtSecret);
    res.json({
        token
    })


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse)
    res.json({
        message: 'Course created successfully',
        courseId:  newCourse._id,

    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })

});

module.exports = router;