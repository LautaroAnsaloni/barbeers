import mongoose from "mongoose";

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, options);
    console.log('MongoDB connected successfully');
    
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connection is open');
    });
    
    mongoose.connection.on('error', (err) => {
      console.log(`Mongoose connection error: ${err}`);
      process.exit(1);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose connection is disconnected');
    });

    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('Mongoose connection is closed due to application termination');
      process.exit(0);
    });
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1);
  }
}
