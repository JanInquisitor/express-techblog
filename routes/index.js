const express = require('express');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


const router = express.Router();

router.use('/api/v1', apiRoutes);
router.use('/', homeRoutes.index)

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
