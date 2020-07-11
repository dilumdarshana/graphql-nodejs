const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const LyricSchema = new Schema({
    song_name: String,
    artist: {
        type: ObjectId,
        ref: 'Artist',
    },
    album: {
        type: ObjectId,
        ref: 'Album',
    },
    lyric: {
        type: String,
        default: null,
    },
    status: {
        type: Boolean,
        default: true,
    }
}, { collection: 'lyric', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Lyric', LyricSchema);
