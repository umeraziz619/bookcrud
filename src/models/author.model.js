import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  dob: {type:String, require:true},
});
export const  AuthorModel = mongoose.model('Author',AuthorSchema);
