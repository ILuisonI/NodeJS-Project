const Joi = require("joi");

const idSchema = Joi.object({
    id: Joi.string().hex().length(24)
});

const validateIdSchema = (userInput) => idSchema.validateAsync(userInput);

module.exports = {
    validateIdSchema,
};