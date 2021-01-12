
require('dotenv').config()
const express = require('express');
const app = express();
const PORT= process.env.PORT || 5252
app.use(express.static('public'))
app.set('view engine','ejs')
const mongoose = require('mongoose');
const GalleryItem = require('./models/galleryItem')
// die uri von MongoDb Website holen

// die Verbindung zur


mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to my DB')
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
        
    })
    .catch(err => console.log(err))
    

