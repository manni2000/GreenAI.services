import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import User from '../models/user.model.js';
import { AppError } from '../utils/appError.js';

export class AuthService {
  static generateToken(userId) {
    return jwt.sign({ id: userId }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn
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
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError('Invalid credentials', 401);
    }
    return user;
  }
}