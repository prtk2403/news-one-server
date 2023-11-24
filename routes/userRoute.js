const express=require('express');
const userModel = require( '../models/userSchema.js')

const router = express.Router();

router.post('/register', async(req, res) => {
    try {
        const newitem = new userModel(req.body);
        await newitem.save();
        res.send('User Added Succsessfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async(req, res) => {
    try {

        const result = await userModel.findOne({email : req.body.email ,password : req.body.password})
        delete result.password;
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports=router;


