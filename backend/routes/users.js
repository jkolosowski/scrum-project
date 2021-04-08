const express = require('express');
const router = express.Router();

const Poll = require('../Models/Poll');
const User = require('../Models/User');

router.get('/', async (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((error) => {
            console.log(console.log(error))
            res.status(404).json({
                success: false
            });
        })
});

router.post('/registration', async (req, res) => {
    const new_user = new User({
        ...req.body
    });


    new_user.save()
        .then((user) => {
            res.json({
                user: user,
                success: true
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(404).json({
                success: false
            });
        });
});

router.post('/login/user', async (req, res) => {
    const pesel = req.body.pesel;

    const foundUser = await User.findOne({ pesel: pesel });

    if (foundUser) {
        const foundPoll = await Poll.findOne({ pesel: pesel });
        if (foundPoll) {
            res.json({
                profile: foundUser,
                poll: foundPoll
            });
        } else {
            res.json({
                profile: foundUser,
                poll: foundPoll
            });
        }
    } else {
        res.json({
            profile: {},
            poll: {}
        });
    }
});

router.post('/getByPESEL', async (req, res) => {
    const pesel = req.body.pesel;
    const foundUser = await User.findOne({ pesel: pesel });

    if (foundUser) {
        const foundPoll = await Poll.findOne({ pesel: pesel });
        if (foundPoll) {
            res.json({
                poll: foundPoll
            });
        } else {
            res.json({
                poll: foundPoll
            });
        }
    } else {
        res.json({
            poll: {}
        });
    }
});
router.post('/login/admin', async (req, res) => {
    const admin_id = req.body.admin_id;

    const foundUser = await User.findOne({ admin_id: admin_id });

    if (foundUser) {
        const foundPoll = await Poll.findOne({ pesel: foundUser.pesel });
        if (foundPoll) {
            res.json({
                profile: foundUser,
                poll: foundPoll
            });
        } else {
            res.json({
                profile: foundUser,
                poll: foundPoll
            });
        }
    } else {
        res.json({
            profile: {},
            poll: {}
        });
    }
});

router.delete('/deleteByPESEL', async (req, res) => {
    const pesel = req.body.pesel;

    User.findOneAndDelete({ pesel: pesel }).then(()=>{
        Poll.findOneAndDelete({ pesel: pesel }).then(()=>{
            res.send("Success")
        })
        .catch(err=>{console.log(err); res.send(err)})
    })
    .catch(err=>{console.log(err); res.send(err)});
});

module.exports = router;
