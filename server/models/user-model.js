const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

//secure the password with bcrypt
userSchema.pre('save', async function(){
    const user = this;

    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }

})
//save means when the controller before saving the data in db this pre will run first. this run as middlware. premethod
const jwtSecretKey = process.env.JWTSECRETKEY;
userSchema.methods.generateToken= async function(){

try {
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin : this.isAdmin
        //this me sara data aa jata hai
    },
    jwtSecretKey,
    {
        expiresIn : "30d",
    }
   

        
    );
} catch (error) {
    console.error(error);
}
} ; //it is a instance method. we can create functions using methods


//json web tokens is a open standard that sefines a compact and self contaiined way 
/* for securing transmitting informatin btw parties adnd json object
used for authentication and authorization
authentication-verify the identity of a user or cliecnt
authorization- what action the user are allowed to perform

components of jwt
header- contains metadata about the token such as type of token and signing algo
being used

payload- contains claims or statements about an entity typically the user and adiitional 
data

signature: to verify that the sender of the jwt is who it says and ensuer the message is not
changed

tokens such as jwt are typically not stored in db. instead they are issued by
server during authentication process and then stored on client side(cookies)
*/
module.exports = mongoose.model('User', userSchema);