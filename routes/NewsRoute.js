const express=require('express');
const NewsItemModel = require( '../models/NewsItem.js')

const router = express.Router();

router.post('/addnews', async(req, res) => {
    try {
        const newsitem = new NewsItemModel(req.body);
        await newsitem.save();
        res.send('News Added Succsessfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/getnews', async(req, res) => {
    try {
        const data = await NewsItemModel.find();
        res.send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/getnewsbyid', async(req, res) => {
    try {
        const data = await NewsItemModel.findOne({_id:req.body.newsid});
        res.send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
router.post('/getnewsbyuser', async(req, res) => {
    try {
        const data = await NewsItemModel.find();
        const userPostedNews=data.filter((obj)=> obj.postedBy.userid === req.body.userid);
        res.send(userPostedNews);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
router.post('/editnews', async(req, res) => {
    try {
        await NewsItemModel.findByIdAndUpdate({_id:req.body.newsid},req.body)
        res.send('News Edited Succsessfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/deletenews', async(req, res) => {
    try {
        await NewsItemModel.findByIdAndDelete({_id:req.body.newsid},req.body)
        res.send('News Deleted Succsessfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});
module.exports = router;