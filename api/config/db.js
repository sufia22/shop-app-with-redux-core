import mongoose from "mongoose";

// create a mongoDB Connection
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected`.bgCyan.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// export
export default mongoDBConnect;
