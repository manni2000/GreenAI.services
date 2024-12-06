import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/database.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import { logger } from './utils/logger.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
};

startServer();