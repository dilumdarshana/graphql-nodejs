const mongoose = require('mongoose');
const { artistModel } = require('../models/index');

const ArtistService = {
    create: async (artist) => {
        const result = await artistModel.create(artist);

        return result;
    }
};

module.exports = ArtistService;
