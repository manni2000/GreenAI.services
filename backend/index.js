import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/database.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import { logger } from './utils/logger.js';
import mongoose from 'mongoose';  

const app = express();

// Set Mongoose options
mongoose.set('strictQuery', true);  // Ensures strict query behavior with Mongoose

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handling
app.use(notFound);  // Handle 404 Not Found
app.use(errorHandler);  // Handle errors

// Connect to Database
connectDB();  // Assuming connectDB is set up in './config/database.js'

// Start Server
const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running in ${config.NODE_ENV} mode on port ${PORT}`);
});
