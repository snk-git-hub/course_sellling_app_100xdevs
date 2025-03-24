const {Router}= require("express");
const {}=require("./db");

const app = express();



signup.post("/signup",(req,res)=>{




    res.send("Signup route")


})

//////////////////////////////////////////////////////
signin.post("/signin",(req,res)=>{




    res.send("Login route");


});


///////////////////////////////////////////////////


purchase.post("/purchase",(req,res)=>{



    res.send("Purchase route");
})





//Add route skeleton for user login, signup, purchase a course, sees all courses, sees the purchased courses course
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
