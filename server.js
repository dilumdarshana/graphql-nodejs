const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/index');
const resolvers = require('./resolver/index');

const app = express();

app.use(bodyParser.json())

const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    formatError: error => {
        return error
    },
    context: ({ req, res }) => {
        return {
            req,
            res,
        }
    },
});

server.applyMiddleware({ app, path: '/graphql' });

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
