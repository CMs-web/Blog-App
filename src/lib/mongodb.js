import mongoose from "mongoose";

const MongoURI =
  "mongodb+srv://blog-app:admin@cluster0.umzdfcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let isConnected = false; // track the connection status

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true; // set the connection status to true
  } catch (error) {
    isConnected = false; // set the connection status to false
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
  console.log("MongoDB connected successfully");
};
