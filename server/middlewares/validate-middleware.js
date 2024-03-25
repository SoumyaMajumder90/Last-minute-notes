const validate = (schema) => async (req,res,next) => { //zod validation
    
try {
    const parseBody  = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
} catch (err) {
    const status = 422;
    const message = "Fill the input properly"
    const extraDetails= err.errors[0].message; //it is an array
    // res.status(400).json({msg: message});

    const error = {
        status,
        message,
        extraDetails,
    };
    next(error);
}
};
module.exports = validate;