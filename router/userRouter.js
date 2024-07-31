const express = require('express');
const { signUp, logIn, makeAdmin, verifyEmail, resendVerificationEmail, update, getAll, ForgetPassword, ResetPassword, changePassword, updateUser, deleteUser} = require('../controller/userController');
const { authenticate } = require('../middleware/auth');
const { Authenticate } = require('../middleware/auth2');

const router = express.Router();

router.post('/signup',signUp);
router.post('/sign-in', logIn);
router.put('/make-admin/:id',Authenticate, makeAdmin);
router.get('/verify/:token', verifyEmail);
router.post('/resend-verification', resendVerificationEmail);
router.put('/update/:id',updateUser)
router.get('/all',authenticate,getAll)
router.post('/forgot-password',ForgetPassword)
router.post('/reset-password/:token',ResetPassword)
router.put('/change-password/:token',changePassword)
router.delete('/delete/:id',deleteUser)

module.exports = router