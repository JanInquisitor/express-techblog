const Post = require('../models');
const catchAsync = require('../utils/catchAsync')

exports.renderAllPosts = catchAsync(async (req, res) => {
    const allPosts = await Post.findAll({});

    const posts = allPosts.map((post) => JSON.parse(JSON.stringify(post)))

    res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
    });
})