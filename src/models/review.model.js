import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  review: {type:Number},
  book_id: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
  },
});
export const ReviewModel = mongoose.model('Review',ReviewSchema);
