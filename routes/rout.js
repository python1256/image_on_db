const express = require("express");
const path =require("path");
const bodyparser=require("body-parser");
const multer = require('multer');
const { error } = require("console");
const app=express();
const router = express.Router();
const upload=multer();


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

router.post("/upload_Image",(req,res)=>{
    console.log("hello");
    upload(req,res,(err)=>{
        if(err){
            console.log(err,"error");
        }
        else{
            const newimage=new Image_store({
                name:req.body.name,
                image:req.file.path
            })
            console.log(newimage);
            newimage.save().then(()=>{
                res.status(201).send("sucessfully upload");
                //just need to change send to render and mention the home page
            }).catch((err)=>{
            res.status(400).send(err);
            })
        }
    })
});
module.exports=router;