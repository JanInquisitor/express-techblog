const Post = require('../models');
const catchAsync = require('../utils/catchAsync');



exports.createPost = catchAsync(async (req, res) => {
     const newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
         user_id: req.body.user_id
    })

        res.status(201).json({
      status: "success",
      data: {
        data: newPost,
      },
    });

})