import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';  // Assuming you have a logger utility for logging.

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);  // Exit process if connection fails
  }
};
