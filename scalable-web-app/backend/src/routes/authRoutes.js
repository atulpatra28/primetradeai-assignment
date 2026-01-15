const express = require('express');
const router = express.Router();
const { 
  signup, 
  login, 
  getProfile, 
  updateProfile 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { 
  signupValidation, 
  loginValidation, 
  validate 
} = require('../middleware/validateRequest');

// Public routes with validation
router.post('/signup', signupValidation, validate, signup);
router.post('/login', loginValidation, validate, login);

// Protected routes
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

module.exports = router;