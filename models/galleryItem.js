const mongoose = require('mongoose');
const Schema = mongoose.Schema

const galleryItemSchema = new Schema({
    url:{
        type:String,
        required: true
    },
    auther: {
        type:String,
        required: true
    },
    rating: {
        type:Number,
        required: true,
        min: 0,
        max: 10
    }
}, { timestamps:true })
const GalleryItem = mongoose.model('GalleryDB' ,galleryItemSchema)
module.exports= GalleryItem