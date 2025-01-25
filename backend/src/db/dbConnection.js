import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`db connected successfully: ${res.connection.host}`);
  } catch (error) {
    console.log(`error while connecting to db: ${error}`);
  }
};
