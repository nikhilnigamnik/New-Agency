import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://nikhilnigamnik:GbdYuiSYshHvfXsS@cluster0.ktnfuam.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Database connection Established`);
  } catch (error) {
    console.log(`Database connection Failed`, error);
    process.exit(1);
  }
};
