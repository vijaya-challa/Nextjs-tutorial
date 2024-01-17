import mongoose from "mongoose";

const connection = {};

export const connectTODB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
