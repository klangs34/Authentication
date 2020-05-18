require('dotenv').config();
const express = require('express');
const Router = express.Router();
const db = require('../model');
const jwt = require('jsonwebtoken');

Router  
    .get('/get-data', (req, res) => {
        res.json({ data: "Data Gotten "});
    });

Router  
    .post('/create-account', async (req, res, next) => {
        try {
            let user = await db.CreateAccount.create(req.body);
            let { email } = user;
            let token = jwt.sign({
                _id,
                email
            },
            process.env.SECRET
            );
            return res.status(200).json({
                _id,
                email,
                token
            })
        } catch (error) {
            //if a validation fails!
            if (error.code === 11000) {
                error.message = "Sorry, that email or username is already registered";
            }
            return next({
                status: 400,
                message: error.message
            })
        }
    });

Router  
    .post('/login', async (req, res, next) => {
        try {
            let user = await db.CreateAccount.findOne({ email: req.body.email });
            let { _id, email } = user;
            let isMatch = await user.comparePassword(req.body.password);
            if(isMatch) {
                let token = jwt.sign({
                    _id,
                    email
                },
                process.env.SECRET
                );
                return res.status(200).json({
                    _id,
                    email,
                    token
                })
            } else {
                return next({
                  status: 400,
                  message: "Invalid Email/Password!"
                });
              }
        } catch (error) {
            return next({
                status: 400,
                message: "Invalid Email/Password"
              });
        }
    })

module.exports = Router;