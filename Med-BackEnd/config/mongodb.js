import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI} ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Error connecting to Database:", error);
    process.exit(1);
  }
};

export default connectDb;
