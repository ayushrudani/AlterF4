const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    problem:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,  
    },
   
    imageURL:{
        type:String,
        required:true,
    },
    comment : [      
    ]
 
},{timestamps:true})

module.exports=mongoose.model("community_posts",PostSchema)