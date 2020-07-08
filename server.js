const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose
    .connect('mongodb://graphql_mongo:27017/lyrics', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        app.listen(8000, () => {
            console.log('**** Connected to MongoDB ****');
            console.log('**** Listening on port 8000 ****');
        });
    })
    .catch(error => {
        console.log('Error on connecting to MongoDB', error);
    });
