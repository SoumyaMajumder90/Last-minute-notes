const express = require("express");
const router = express.Router();
// const authController = require("../controllers/auth-controller");
// const signupSchema = require("../validator/auth-validator");
// const loginSchema = require("../validator/auth-validator");
// const validate = require('../middlewares/validate-middleware');
const contactForm = require("../controllers/contact-controller");


router.route("/contact").post(contactForm);
module.exports = router;
