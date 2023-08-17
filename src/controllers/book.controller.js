import { BookService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const BookController = {
	getall: async (req, res) => {
		try {
			const data = await BookService.getall();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				console.log("helo")
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo2")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	add: async (req, res) => {
		try {
			const data = await BookService.add(req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				console.log("helo")
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo2")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	update: async (req, res) => {
		try {
			const data = await BookService.update(req.params,req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				console.log("helo")
				return httpResponse.NOT_FOUND(res, error.response);
			}
			console.log("helo6")
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	authorSpecific: async(req,res)=>{
		try {
			const data = await BookService.authorSpecific(req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				console.log("helo")
				return httpResponse.NOT_FOUND(res, error.response);
			}
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	delete: async(req,res)=>{
		try {
			const data = await BookService.delete(req.params);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			if (error.status == 404) {
				console.log("helo")
				return httpResponse.NOT_FOUND(res, error.response);
			}
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	}
};
