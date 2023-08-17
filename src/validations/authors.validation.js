import Joi from "joi";

export const AuthorValidationSchema = {
	add: {
		body: Joi.object().keys({
			name: Joi.string().required(),
            dob: Joi.string().required(),
		}),
	},
	update: {
		body: Joi.object().keys({
			name: Joi.string(),
            dob: Joi.string()
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
