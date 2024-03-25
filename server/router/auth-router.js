const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const signupSchema = require("../validator/auth-validator");
const loginSchema = require("../validator/auth-validator");
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');


router.route("/").get(authController.home);
router.route("/login").post(authController.login); //zod validation use in login
router.route("/register").post(validate(signupSchema), authController.register);
router.route("/user").get(authMiddleware, authController.user);
module.exports = router;
