const jwt = require("jsonwebtoken");
const authMiddleware = async (req,res, next)=> {
const token = req.header("Authorization");
const User = require('../models/user-model')

if(!token){
    //if you attempt to use an expired token, you will recerive a "401 unauthorized HTTP" response

    return res.status(401).json({message: "Unauthorized HTTP , Token not provided"});

}



//assuming token is in the format "Bearer<jwt token> removing the bearer"
const jwtToken = token.replace("Bearer", "").trim()
console.log("token from authmiddleware", jwtToken);


try {
   const isVerified = jwt.verify(jwtToken, process.env.JWTSECRETKEY);
   console.log(isVerified); 
   const userData = await User.findOne({email: isVerified.email}).
   select({
    password:0,
//no need of password so thats why 0

   });
   console.log(userData);
   req.user= userData;
   req.token = token;
   req.userID= userData._id;

   //in express.js req(request) object is an object that containe information about
   //the HTTP req. by adding cutom properties to req, you can pass information
   //between middleware function or make it availablt in you route handler.
   
    next(); 
} catch (error) {
    return res.status(401).json({message: "Unauthorized, invalid Token"});
}

}
module.exports = authMiddleware;