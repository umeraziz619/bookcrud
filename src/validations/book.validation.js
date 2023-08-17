import Joi from "joi";

export const BookValidationSchema = {
	add: {
		body: Joi.object().keys({
			name: Joi.string().required(),
            isbn: Joi.string().required(),
			author_id: Joi.string().length(24).required()
		}),
	},
	getbooksAuthor: {
		body: Joi.object().keys({
			id: Joi.string().length(24).required(),
		}),
	},
	update: {
		body: Joi.object().keys({
			name:Joi.string(),
			author:Joi.string(),
			isbn:Joi.string(),
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