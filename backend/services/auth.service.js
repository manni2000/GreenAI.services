import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import User from '../models/user.model.js';
import { AppError } from '../utils/appError.js';

export class AuthService {
  static generateToken(userId) {
    return jwt.sign({ id: userId }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN,
    });
  }

  static async createUser(userData) {
    try {
      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) {
        const errorMessage = `Email already in use: ${userData.email}`;
        console.error(`[ERROR] Registration failed: ${errorMessage}`);
        throw new AppError(errorMessage, 400);
      }

      const newUser = await User.create(userData);

      console.info(`[INFO] User created successfully with email: ${newUser.email}`);
      return newUser;
    } catch (error) {
      console.error(`[ERROR] Failed to create user: ${error.message}`);
      throw error;
    }
  }

  static async validateUser(email, password) {
    try {
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        const warningMessage = `User not found for email: ${email}`;
        console.warn(`[WARN] Authentication failed: ${warningMessage}`);
        throw new AppError('Invalid credentials', 401); 
      }

      // Use the comparePassword method from the user model
      const isPasswordValid = await user.comparePassword(password);
      
      if (!isPasswordValid) {
        const warningMessage = `Invalid password for email: ${email}`;
        console.warn(`[WARN] Authentication failed: ${warningMessage}`);
        throw new AppError('Invalid credentials', 401); 
      }

      console.info(`[INFO] User validated successfully: ${email}`);
      return user;
    } catch (error) {
      if (!(error instanceof AppError)) {
        console.error(`[ERROR] Unexpected error during user validation: ${error.message}`);
      }
      throw error;
    }
  }
}
