import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database Connected Successfully")
  );
  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;
