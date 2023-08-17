import {BookModel, ReviewModel } from "../models/index.js";
export const ReviewService = {
  getall: async () => {
    try {
        let data = await ReviewModel.find();
        console.log(data)
        return {
            status: 200,
            message: "Successfull",
            response: "Reviews Fetched Successfull",
            data: {data},
          };
      } catch (error) {
        console.log(error)
        throw {
            status: error.status,
            response: error.response,
          };
      }
},
 add: async (body) => {
        try {
            let data = await BookModel.findById(body.book_id);
            if (!data) {
              throw{
                status: 404,
                response: "Id doesn't exist",
              };
            }
            data =await ReviewModel.create(body)
            return {
                status: 200,
                message: "Successfull",
                response: "Book added Successfull",
                data
              };
          } catch (error) {
            console.log(error)
            throw {
                status: error.status,
                response: error.response,
              };
          }
	},
 update: async (params,body) => {
        try {
            let data = await ReviewModel.findById(params.id);
            if (!data) {
              throw{
                status: 404,
                response: "Id doesn't exist",
              };
            }
            data.review = body.review;
            await data.save();
            return {
                status: 200,
                message: "Successfull",
                response: "Book Updated Successfull",
                data
              };
          } catch (error) {
            console.log(error)
            throw {
                status: error.status,
                response: error.response,
              };
          }
	},
 delete: async (params) => {
        try {
            let data = await ReviewModel.findByIdAndDelete(params.id);
            if (!data) {
              throw{
                status: 404,
                response: "Id doesn't exist",
              };
            }
            return {
                status: 200,
                message: "Successfull",
                response: "Book deleted Successfull",
                data
              };
          } catch (error) {
            console.log(error)
            throw {
                status: error.status,
                response: error.response,
              };
          }
	},

};
