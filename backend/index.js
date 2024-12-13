import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/database.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import { logger } from './utils/logger.js';
import mongoose from 'mongoose';  

const app = express();

mongoose.set('strictQuery', true);  

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(notFound);  
app.use(errorHandler);  

connectDB();  

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running in ${config.NODE_ENV} mode on port ${PORT}`);
});
