import Joi from "joi";

export const ReviewValidationSchema = {
	add: {
		body: Joi.object().keys({
            book_id:Joi.string().length(24).required(),
            review:Joi.number().required(),
		}),
	},
	update: {
		body: Joi.object().keys({
            review:Joi.number().required(),
		}),
		params: Joi.object().keys({
			id: Joi.string().length(24).required()
		}),
	},
	delete: {
		params: Joi.object().keys({
			id: Joi.string().length(24).required()
		}),
	},
};