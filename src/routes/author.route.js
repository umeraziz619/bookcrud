import express from "express";
import {AuthorValidationSchema} from "../validations/index.js";
import { validate} from "../middleware/index.js";
import { AuthorController } from "../controllers/author.controller.js";
const authorroute = express.Router();
authorroute.get("/",AuthorController.getall)
authorroute.post(
    "/",
    validate(AuthorValidationSchema.add),
    AuthorController.add
  );
authorroute.put("/:id",validate(AuthorValidationSchema.update),AuthorController.update);
authorroute.delete("/:id",validate(AuthorValidationSchema.delete),AuthorController.delete);


export default authorroute;