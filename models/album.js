const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const AlbumSchema = new Schema({
    name: String,
    artist: {
        type: ObjectId,
        ref: 'Artist',
    },
    year: {
        type: Date,
        default: null,
    },
    album_image: {
        type: String,
        default: null,
    },
    status: {
        type: Boolean,
        default: true,
    }
}, { collection: 'album', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Album', AlbumSchema);
