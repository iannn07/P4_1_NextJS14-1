import mongoose from 'mongoose';

const connection = {};

export const dbConnection = async () => {
  try {
    if (connection.isConnected) {
      console.log('already connected');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to database');
  }
};
