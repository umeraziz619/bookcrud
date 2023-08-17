
import {BookModel } from "../models/index.js";
export const BookService = {
	getall: async () => {
        try {
            let data = await BookModel.find();
            console.log(data)
            return {
                status: 200,
                message: "Successfull",
                response: "Book added Successfull",
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
            let data = await BookModel.findOne({"isbn":body.isbn});
            if (data) {
              throw{
                status: 404,
                response: "Data Already Exists",
              };
            }
            data =await BookModel.create(body)
            return {
                status: 200,
                message: "Successfull",
                response: "Book added Successfull",
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
  update: async(params,body)=>{
    try {
      let data = await BookModel.findById(params.id);
      if(!data){
        throw{
          status: 404,
          response: "Can't find ID",
        };
      }
      data.name = body.name;
      data.isbn = body.isbn;
      await data.save();
      return {
        status: 200,
        message: "Successfull",
        response: "Book updated Successfull",
        data: {data},
      };
    } catch (error) {
      throw {
        status: error.status,
        response: error.response,
      };
    }
  },
  delete: async(params)=>{
    try {
      let data = await BookModel.findByIdAndDelete(params.id);
      if(!data){
        throw{
          status: 404,
          response: "Can't find the ID",
        };
      }
      return {
        status: 200,
        message: "Successfull",
        response: "Book deleted Successfull",
        data:{id:data.id,bookName:data.name},
      };
    } catch (error) {
      console.log(error)
      throw {
        status: error.status,
        response: error.response,
      };
    }
  },
  authorSpecific: async(body)=>{
    try {
      let data = await BookModel.find({"author_id":body.id});
      console.log(data);
    if(!data){
      throw{
        status: 404,
        response: "Not found"
      };
    }
    return {
      status: 200,
      response: "Author Specific Book Fetched Successfully",
      data
    };
  } catch (error) {
      console.log(error)
      throw {
        status: error.status,
        response: error.response,
      };
    }
  }
};
