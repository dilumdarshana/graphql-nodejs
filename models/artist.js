const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSchema = new Schema({
    name: String,
    alphabet: {
        type: String,
        default: null,
    },
    artist_image: {
        type: String,
        default: null,
    },
    status: {
        type: Boolean,
        default: true,
    }
}, { collection: 'artist', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Artist', ArtistSchema);
