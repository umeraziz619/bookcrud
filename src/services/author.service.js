import { AuthorModel } from "../models/index.js";
export const AuthorService = {
  getall: async () => {
    try {
        let data = await AuthorModel.find();
        console.log(data)
        return {
            status: 200,
            message: "Successfull",
            response: "Fetced All Data",
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
      let data = await AuthorModel.create(body);
      return {
        status: 200,
        message: "Successfull",
        response: "Author Created Successfully",
        data
      };
    } catch (error) {
      console.log(error);
      throw {
        status: error.status,
        response: error.response,
      };
    }
  },
  update: async (params,body) => {
    try {
      let data = await AuthorModel.findById(params.id);
      if (!data) {
        throw{
          status: 404,
          response: "Id doesn't exist",
        };
      }
      data.name = body.name;
      data.dob = body.dob;
      await data.save();
      return {
        status: 200,
        message: "Successfull",
        response: "Author Updated Successfully",
        data
      };
    } catch (error) {
      console.log(error);
      throw {
        status: error.status,
        response: error.response,
      };
    }
  },
  delete: async (params) => {
    try {
      let data = await AuthorModel.findByIdAndDelete(params.id);
      if (!data) {
        throw{
          status: 404,
          response: "Id doesn't exist",
        };
      }
      return {
        status: 200,
        message: "Successfull",
        response: "Author deleted Successfully",
        data
      };
    } catch (error) {
      console.log(error);
      throw {
        status: error.status,
        response: error.response,
      };
    }
  },
};
