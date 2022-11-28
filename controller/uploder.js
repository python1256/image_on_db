const express = require("express");
const path =require("path");
const bodyparser=require("body-parser");
const multer = require('multer');
const { error } = require("console");
const app=express();
const Image_store=require("../model/image_model");



const storage=multer.diskStorage({
    destination:function(req,file,cb){cb(null,`${__dirname}/../uploads`);},
    filename:function(req,file,cb){
       cb(null,file.originalname);
    }
});


const uploadImg=multer({
    storage:storage,
}).single('image');

module.exports={uploadImg};