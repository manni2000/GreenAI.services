import { AuthService } from '../services/auth.service.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../utils/appError.js';

export const signup = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await AuthService.createUser({ name, email, password });
  const token = AuthService.generateToken(user._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    }
  });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Please provide email and password', 400);
  }

  const user = await AuthService.validateUser(email, password);
  const token = AuthService.generateToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    }
  });
});