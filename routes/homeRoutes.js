const express = require('express');
const {Post} = require('../models');
const catchAsync = require('../utils/catchAsync')

const viewController = require('../controllers/viewControllers')

const router = express.Router();

exports.index = router.get('/', catchAsync(async (req, res) => {

    const allPosts = await Post.findAll({});

    const posts = allPosts.map((post) => JSON.parse(JSON.stringify(post)))

    res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
    });
}))

router.get('/post/:id', (req, res) => {

})

router.get('/login', (req, res) => {

})