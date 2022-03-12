// Validation
const Joi = require('@hapi/joi');

// Register a Validation
const registerValidation = body => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    // Lets validate a data before we make a user
    return schema.validate(body);
};

// Login a Validation
const loginValidation = body => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    // Lets validate a data before we make a user
    return schema.validate(body);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
