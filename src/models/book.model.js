
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: { type: String, required: true },
  isbn: {type:String,require:true},
  author_id: {
    type: mongoose.Types.ObjectId,
    ref: "Author",
  },
  review_id: {
    type: mongoose.Types.ObjectId,
    ref: "Review",
  },
});
export const BookModel = mongoose.model('Book',BookSchema);

