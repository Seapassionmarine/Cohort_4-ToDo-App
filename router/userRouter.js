const express = require('express');
const { signUp, logIn, makeAdmin, verifyEmail, resendVerificationEmail, update, getAll, ForgetPassword, ResetPassword, changePassword, updateUser, deleteUser} = require('../controller/userController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.post('/sign-up',signUp);
router.post('/sign-in', logIn);
router.put('/make-admin/:userId', makeAdmin);
router.get('/verify/:token', verifyEmail);
router.post('/resend-verification', resendVerificationEmail);
router.put('/update/:userId',updateUser)
router.get('/all',authenticate,getAll)
router.post('/forgot-password',ForgetPassword)
router.post('/reset-password/:token',ResetPassword)
router.put('/change-password/:token',changePassword)
router.delete('/delete/:userId',authenticate,deleteUser)

module.exports = router