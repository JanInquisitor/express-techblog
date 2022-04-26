const express = require('express');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');


const router = express.Router();

router.use('/users', userRoutes)
// router.use('/posts', postRoutes);

module.exports = router;
