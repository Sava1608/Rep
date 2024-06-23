import Joi from "joi";

export const joi = Joi.object({
    title: Joi.string().min(1).required().messages({
        'string.empty': 'Min 1 symbol',
        'string.min': 'Min 1 symbol'
    })
})