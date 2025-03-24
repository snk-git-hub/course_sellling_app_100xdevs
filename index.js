const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Node.js!");
});

login.post("/login",(req,res)=>{
    res.send("Login route");

});

signup.post("/signup",(req,res)=>{
    res.send("Signup route")
})

course.get("/course",(req,res)=>{
    res.send("Course route");
})
purchase.post("/purchase",(req,res)=>{
    res.send("Purchase route");
})
my_course.get("/my_course",(req,res)=>{
    res.send("My course route");
})
//Add route skeleton for user login, signup, purchase a course, sees all courses, sees the purchased courses course
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
