const mongoose=require("mongoose");
const Imageschema = new mongoose.Schema({
   name:{
      typeof:String,
   },
   image:{
      type:String
   }
})
const Image_store=new mongoose.model('Image_store',Imageschema);

module.exports=Image_store;
