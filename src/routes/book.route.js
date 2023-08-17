import express from "express";
import { BookValidationSchema } from "../validations/index.js";
import { validate} from "../middleware/index.js";
import { BookController } from "../controllers/book.controller.js";
const bookroute = express.Router();
bookroute.get("/",BookController.getall),
bookroute.post(
    "/",
    validate(BookValidationSchema.add),
    BookController.add
  );
bookroute.put("/:id",validate(BookValidationSchema.update),BookController.update);
bookroute.delete('/:id',validate(BookValidationSchema.delete),BookController.delete);
bookroute.get(
    "/authorspecific",
    validate(BookValidationSchema.getbooksAuthor),
    BookController.authorSpecific
  );

export default bookroute;