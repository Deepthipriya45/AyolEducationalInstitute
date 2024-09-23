const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const UserModel = require('./Models/User.js');
const jwt = require('jsonwebtoken');
const jwtSecret =  "A secret key"; 
const connectDB = require('./db.js');

connectDB();
const app = express();
app.use(express.json());
app.use(cors({
    origin: [
        "https://ayolinstitutions.netlify.app/",
        "http://localhost:3000"
    ]
}));
const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, jwtSecret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};
app.post('/register', [
    check('roll').notEmpty().withMessage('Roll number is required'),
    check('mobile').isLength({ min: 10, max: 10 }).withMessage('Mobile number must be 10 digits'),
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('ucha').notEmpty().withMessage('Ucha is required'),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { roll, mobile, email, ucha} = req.body;

        if (await UserModel.findOne({ rollNo: roll })) {
            return res.status(400).json({ message: "Roll number already exists", success: false });
        }
        if (await UserModel.findOne({email })) {
            return res.status(400).json({ message: "Email already exists", success: false });
        }
        if (await UserModel.findOne({ phoneno: mobile })) {
            return res.status(400).json({ message: "mobile number already exists", success: false });
        }
       

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(ucha, salt);

        const newUser = new UserModel({ rollNo: roll, phoneno: mobile, email, ucha:hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "Data successfully stored", success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/studentlogin', [
    check('emails').isEmail().withMessage('Enter a valid email address'),
    check('passw').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { emails, passw } = req.body;

        const user = await UserModel.findOne({ email: emails });
        if (!user) {
            return res.status(400).json({ error: "Wrong credentials" });
        }

        const match = await bcrypt.compare(passw, user.ucha);
        if (!match) {
            return res.status(400).json({ error: "Wrong credentials" });
        }

        const data = {
            user: {
                email: user.email,
                roll:user.rollNo
            }
        };
        const authToken = jwt.sign(data, jwtSecret);
        
        res.json({ status: "success", roll:user.rollNo ,authToken ,email:user.email})

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/forgotpassword',[
    check('roll').isLength({min:3}).withMessage('roll number length should be 5'),
    check('email').isEmail().withMessage('Enter a valid Email'),
    check('pass').isLength({min:5}).withMessage('pass must contain at length of 5'),

    check('conpass').isLength({min:5}).withMessage('conform passwordmust contain at length of 5'),
],async(req,res)=>
{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const{roll,email,pass,conpass}=req.body;
   const user= await UserModel.findOne({rollNo:roll,email:email})

if(!user)        {
            return res.status(400).json({ error: "Wrong credentials" });
        }
        if(pass!=conpass)
        {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);

        user.ucha = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Password reset successfully" });
        
    } catch (error) {
        
    }
})

app.post('/getuser', fetchuser, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select("-passw");  
        res.send(user);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
