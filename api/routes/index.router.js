const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user_controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/coachProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;