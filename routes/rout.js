const express = require("express");
const path =require("path");
const bodyparser=require("body-parser");
const multer = require('multer');
const { error } = require("console");
const app=express();
const router = express.Router();
const upload=multer();
const control=require("../controller/uploder");


router.get('/show_image',(req,res)=>{
    Image_store.find({},(err,Items)=>{
        if(err){
            console.log(err);
            res.status(400).send('an error');
        }else{
            res.send({Items:Items});
        }
    });
})
router.get("/show_by_id/:id",async(req,res)=>{
    try{
        const Id=req.params.id;
        console.log(Id);
        const foundimage=await Image_store.findOne({id:Id});
        res.status(201).send(foundimage);
    } catch(err){
        res.status(400).send(err);
    }
})
router.post("/update_img",control.uploadImg,control.imageup);
module.exports=router;