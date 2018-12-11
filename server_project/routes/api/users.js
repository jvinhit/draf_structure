const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = "scKeys";
const passport =require('passport');

//
const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
//@route            GET api/users/test
//@desc             Test users route
//@access           public
router.get('/test', (req,res) => {
    res.status(200).send('Success');
})
//@route            GET api/users/register
//@desc             Test users route
//@access           public
router.post('/register', (req, res) => {
    // validate
    const { errors, isValid} = validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    User.findOne({email: req.body.email}).then(user => {
        if(user){
            errors.email = "Email already exists";
            return res.status(400).json(errors);
        } else {
            const avatar = "User_Avatar_2.png";
            const newUser = new User({
                name: req.body.email,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err,hashSalt) => {
                bcrypt.hash(newUser.password, hashSalt, (err, hash ) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then( user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }

    })
    
})


module.exports = router;