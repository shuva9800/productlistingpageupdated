const express = require('express')
const { signupHandler, loginHandler } = require('../controller/auth.controller')
const router = express.Router()


router.post('/signup',signupHandler);
router.post('/login',loginHandler);



module.exports = router