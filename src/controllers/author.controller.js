import {AuthorService} from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const AuthorController = {
	getall: async (req, res) => {
		try {
			const data = await AuthorService.getall();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	add: async (req, res) => {
		try {
			const data = await AuthorService.add(req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	update: async (req, res) => {
		try {
			const data = await AuthorService.update(req.params,req.body);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	delete: async (req, res) => {
		try {
			const data = await AuthorService.delete(req.params);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
