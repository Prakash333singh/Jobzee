import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`,
      {
        dbName: "job_seeking",
      }
    );
    console.log(
      `mongodb connected || DB HOST :${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection failed!!!");
    throw error;
  }
};
