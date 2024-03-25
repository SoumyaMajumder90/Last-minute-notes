const User = require('../models/user-model');
const Contact = require("../models/contact-model");
const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find({}, {password:0});
        console.log(users);
       
        if(!users || users.length ===0){
            res.status(404).json({message: "no user found"});
        }
         res.status(200).json(users);
    } catch (error) { 
        next(error);
    }

   


};


const getAllContacts = async (req,res) =>{
    try {
        const contacts = await Contact.find();
        return res.status(200).json(contacts);
        if(!contacts || contacts.length ===0){
            res.status(404).json({message: "no user found"});
        }
    } catch (error) {
        console.log(error);
    }


};
//user delete logic
const deleteUserByID = async(req,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({message: "User Deleted Sucessfully"});
        
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllUsers, getAllContacts, deleteUserByID};