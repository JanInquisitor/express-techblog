const User = require('../models');
const catchAsync = require('../utils/catchAsync')

exports.getAllUsers = catchAsync(async (req, res) => {
    const allUsers = await User.findAll({});
    res.status(200).json(allUsers);
});

exports.createUser = catchAsync(async (req, res) => {
    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })


    req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(newUser);
    })

});

exports.login = catchAsync(async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (user) {
        console.log('user')
        if (user.validatePassword(user.password)) {
            console.log('valid')
            req.session.save(() => {
                req.session.loggedIn = true;
            });
            res.json({user, message: 'you are logged in.'});
        }
    }
    res.status(400).json({message: 'Something went wrong.'});
})