const Joi = require("joi");

function validateRegistrationData(body) {
    const schema = Joi.object({
        username: Joi.string().max(30).required(),
        emailAddress: Joi.string().email().required(),
        password: Joi.string().min(6).regex(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirmPassword: Joi.ref('password')
    })

    return schema.validate(body)
}

function validateLoginAuthenticationData(body) {
    const schema = Joi.object({
        username: Joi.string().min(6).max(30).required(),
        password: Joi.string().min(6)
    })

    return schema.validate(body)
}


module.exports = { validateRegistrationData, validateLoginAuthenticationData }