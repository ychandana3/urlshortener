const mongoose = require('mongoose');
const shortUrlId = require('shortid');


const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: [true, 'url is required']
    },
    shortIdOfTheFullUrl: {
        type: String,
        default: shortUrlId.generate
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('url', urlSchema);