const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri || !mongoUri.startsWith("mongodb")) {
    console.error("MONGO_URI is missing or invalid in .env. Use mongodb:// or mongodb+srv:// format.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;