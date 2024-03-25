const express = require('express');
const { getAllUsers, getAllContacts, deleteUserByID  } = require('../controllers/admin-controller'); // Import the specific function
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/users").get(authMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, getAllContacts);

router.route("/users/delete/:id").delete(authMiddleware, deleteUserByID); //admin middlware is needed



module.exports = router;
