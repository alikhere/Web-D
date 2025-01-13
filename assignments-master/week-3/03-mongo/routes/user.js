const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username, 
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    try {
        const courseId = req.params.courseId;
        const username = req.headers.username;

        const result = await User.updateOne(
            { username: username },
            { "$push": { purchasedCourses: courseId } }
        );
        console.log(courseId);

        if (result.modifiedCount === 0) {
            return res.status(400).json({ message: "Purchase failed, course might already be purchased." });
        }

        res.json({
            message: "Purchase complete!"
        });
    } catch (err) { 
        console.error(err);
        console.log(err);
        res.status(500).json({ message: "An error occurred while processing the purchase." });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: course
    })
});

module.exports = router