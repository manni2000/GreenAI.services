import jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError.js';
import { config } from '../config/env.js';
import User from '../models/user.model.js';
import { catchAsync } from '../utils/catchAsync.js';

export const protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('Not authorized to access this route', 401));
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new AppError('Not authorized to access this route', 401));
  }
});