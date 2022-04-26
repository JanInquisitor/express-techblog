const express = require('express');
const userController = require('../../controllers/userControllers');


const router = express.Router();

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)

router.post('/login', userController.login)

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
