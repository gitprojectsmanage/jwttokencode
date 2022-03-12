const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifytoken');

router.get('/', verify,  (req, res) => {
    // res.json({
    //     posts: {
    //         title: 'My first post', 
    //         description: 'random data you shouldnot access'
    //     }
    // });
    res.send(req.user);
    User.findById({_id: req.user._id});
});

module.exports = router;