const { z } = require('zod');

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 chars." }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Email is required" })
        .min(3, { message: "Email must be at least 3 chars." })
        .max(255, { message: "Email must not be more than 255 characters" }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 chars." }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 chars." })
        .max(1024, { message: "Password must not be more than 1024 characters" }),
});


const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Email is required" })
        .min(3, { message: "Email must be at least 3 chars." })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 chars." })
        .max(1024, { message: "Password must not be more than 1024 characters" }),
}); 

module.exports = signupSchema;

// module.exports = {signupSchema, loginSchema}; //export login validator