const path = require('path');
const {validationResult} = require('express-validator/check');


const Video = require('../models/video_model')
const User = require('../models/user_model')

exports.getVideos = (req, res, next) => {
    Video.find((err, videos) => {
        res.status(200).json(videos);
    });
}

exports.getVideo = (req, res, next) => {
    let videoId = req.params.videoId;
    Video.findById(videoId).then(video =>{
        if(!video) {
            const error = new Error('Could not find video');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            message: 'Video fetched',video
        }).catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
        })
    });
}

exports.postVideo = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    let creater;
    const newVideo = new Video({
        Name: req.body.Name,
        Description: req.body.Description,
    });

    newVideo.save().then(result => {
        console.log(req);
        return User.findById(req._Id);
        
    }).then(user => {
        creater = user;
        user.videos.push(newVideo);
        return user.save();
    }).then(result => {
        res.status(201).json({
            message: 'Video created successfully',
            Video: newVideo,
            creator: {_id: creator._id, name: creator.fullName}
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
}