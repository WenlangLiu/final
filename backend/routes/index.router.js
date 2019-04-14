const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user_controller');
const jwtHelper = require('../config/jwtHelper');
const ctrVideo = require('../controllers/video_controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
// get userProfile
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
// router.get('/coachHome',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
// get coachProfile
router.get('/coachProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
// get all of videos
router.get('/video',ctrVideo.getVideos);
// get specific video
router.get('/:videoId',ctrVideo.getVideo);
router.post('/coach/coachUpload',ctrVideo.postVideo)

module.exports = router;