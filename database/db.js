import mongoose from "mongoose";

const connection = async (URL) => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connect Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default connection;
