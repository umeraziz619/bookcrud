import express from "express";

// routes
import userRoute from "./user.route.js";
import bookRoute from "./book.route.js";
import authorroute from "./author.route.js";
import reviewroute from "./review.route.js";
const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/author", authorroute);
unProtectedRouter.use("/book",bookRoute);
unProtectedRouter.use("/review",reviewroute)
// unProtectedRouter.use("/book",)

export { protectedRouter, unProtectedRouter };
