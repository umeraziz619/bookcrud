import express from "express";
import {ReviewValidationSchema} from "../validations/index.js";
import { validate} from "../middleware/index.js";
import { ReviewController } from "../controllers/review.controller.js";
const reviewroute = express.Router();
reviewroute.get("/",ReviewController.getall)
reviewroute.post(
    "/",
    validate(ReviewValidationSchema.add),
    ReviewController.add
  );
reviewroute.put("/:id",validate(ReviewValidationSchema.update),ReviewController.update);
reviewroute.delete("/:id",validate(ReviewValidationSchema.delete),ReviewController.delete)

export default reviewroute;