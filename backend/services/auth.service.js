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
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new AppError('Email already in use', 400);
    }
    return User.create(userData);
  }

  static async validateUser(email, password) {
    const user = await User.findOne({ email }).select('password');
    if (!user) {
      console.error(`[ERROR] User not found for email: ${email}`);
      throw new AppError('Invalid credentialsA', 401);
    }
  
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      console.error(`[ERROR] Invalid password for email: ${email}`);
      throw new AppError('Invalid credentialsB', 401);
    }
  
    return user;
  }
}