
import { ReviewService } from "../services/review.service.js";
import { httpResponse } from "../utils/index.js";
export const ReviewController = {
	getall: async (req, res) => {
		try {
			const data = await ReviewService.getall();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo2")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	add: async (req, res) => {
		try {
			const data = await ReviewService.add(req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo2")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	update: async (req, res) => {
		try {
			let data = await ReviewService.update(req.params,req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo2")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	delete: async (req, res) => {
		try {
			let data = await ReviewService.delete(req.params);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo2")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};