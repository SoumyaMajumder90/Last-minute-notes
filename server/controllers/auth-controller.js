//ye ek home  controller hai

const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req,res) =>{

    try {
        res.status(200).send("I love u");


        //try to use try catch when using async function
    } catch (error) {
        console.log(error);
    }
}
// 1 get the registration data: username, email,password
// 2 check email existance
// 3 hash password
// 4 create User
// 5 save to debugger
// 6 respond: respond with registration succesful



const register = async (req, res) => {
    try {
        // Extract data from the request body
        const { username, email, phone, password } = req.body;

        // Check if the email already exists
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create a new user
       const userCreated= await User.create({ username, email, phone, password });

        res.status(200).json({ msg: "User registered successfully", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        // console.error(error);
        // res.status(500).json({ msg: "Internal server error" });
        next(error);
    }
};

//login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist1 = await User.findOne({ email });
        console.log(userExist1);

        if (!userExist1) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        console.log("Provided Password:", password);
        console.log("Stored Password:", userExist1.password);
        const passwordMatch = await bcrypt.compare(password, userExist1.password); // Fixed variable name

        if (passwordMatch) {
            res.status(200).json({
                msg: "Login successfully",
                token: await userExist1.generateToken(),
                userId: userExist1._id.toString()
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
};

//to sernd user data = user logic
const user = async (req,res)=>{
try {
     const userData = req.user;
     console.log(userData);
     return res.status(200).json({ userData });

} catch (error) {
    console.log('error from user route ${error}')
}

}

module.exports = {home , register, login, user};