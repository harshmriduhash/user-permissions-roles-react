const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const auth = require('../../middleware/auth');

router.get('/', auth, (req, res) => {
    res.json({ msg: "Welcome to your landing page" });

});
module.exports = router;